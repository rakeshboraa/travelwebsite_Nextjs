"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import React, { useEffect, useState } from 'react'
import ThumbnailUploader from "../common/ThumbnailUploader"
import FormHeader from "../common/FormHeader"
import ImageUploader from "../common/ImageUploader"
import PackageImageUploader from "../common/PackagesImageUploader"
import PackageTimes from "../common/PackageTimes"
import PackageDetails from "../components/PackageDetails"
import MultipleDateSelector from "../common/MultipleDateSelector"
import LocationDetails from "../components/LocationDetails"
import ProductDetails from "../components/ProductDetails"
import MessageFrom from "../common/MessageFrom"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import Link from "next/link"

const ProductForm = ({ product, mode, product_id }) => {
    const router = useRouter();
    const handleBack = () => {
        router.back();
    };
    const isEditMode = mode === 'edit';
    const [title, setTitle] = useState(isEditMode ? product.title : '');
    const [description, setDescription] = useState(isEditMode ? product.description : '');
    const [price, setPrice] = useState(isEditMode ? product.price : '');
    const [details, setDetails] = useState(isEditMode ? product.details : '');
    const [line1, setLine1] = useState(isEditMode ? product.location.line1 : '');
    const [line2, setLine2] = useState(isEditMode ? product.location.line2 : '');
    const [landmark, setLandmark] = useState(isEditMode ? product.location.landmark : '');
    const [packages, setPackages] = useState(isEditMode ? product.packages : [
        {
            title: '',
            price: '',
            description: '',
            times: [],
            dates: [],
            images: []
        }
    ]);
    const [filePreviews, setFilePreviews] = useState(isEditMode ? product.image : []);
    const [files, setFiles] = useState([]);
    const [packageFiles, setPackageFiles] = useState(isEditMode ? product.packages.map(pkg => pkg.images) : packages.map(() => []));
    const [filePackagesPreviews, setFilePackagesPreviews] = useState(isEditMode ? product.packages.map(pkg => pkg.images) : packages.map(() => []));
    const [media, setMedia] = useState(isEditMode ? product.image : []);
    const [thumbnailPreview, setThumbnailPreview] = useState(isEditMode ? product.thumbnail : null);
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    const [messageText, setMessageText] = useState('');
    const [messageType, setMessageType] = useState('');
    const [status, setStatus] = useState(isEditMode ? product.status : 'draft');
    const [categories, setCategories] = useState(isEditMode ? product.category : 'Select Category');
    const [loading, setLoading] = useState(false);
    const [thumbnailPic, setThumbnailPic] = useState(isEditMode ? product.thumbnail : null);
    const [Products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/categories')
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            console.error('Fetch error:', error)
        } finally {
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setThumbnailFile(file);
            setThumbnailPreview(URL.createObjectURL(file));
        }
    };

    const handleFileChange = (e) => {
        const filesArray = Array.from(e.target.files);
        const previewUrls = filesArray.map(file => URL.createObjectURL(file));
        setFiles(filesArray);
        setFilePreviews(previewUrls);
    };

    const handlePackagefileChange = (index) => (e) => {
        const filesArray = Array.from(e.target.files);
        const previewUrls = filesArray.map(file => URL.createObjectURL(file));

        setPackageFiles((prevPackageFiles) => {
            const updatedPackageFiles = [...prevPackageFiles];
            updatedPackageFiles[index] = filesArray;
            return updatedPackageFiles;
        });

        setFilePackagesPreviews((prevFilePackagesPreviews) => {
            const updatedFilePackagesPreviews = [...prevFilePackagesPreviews];
            updatedFilePackagesPreviews[index] = previewUrls;
            return updatedFilePackagesPreviews;
        });
    };

    useEffect(() => {
        if (!thumbnailFile) return;
        const uploadThumbnail = async () => {
            const data = new FormData();
            data.append('file', thumbnailFile);
            data.append('upload_preset', 'pzynf5m0');
            data.append('cloud_name', 'dvjkkdby1');
            try {
                const res = await fetch('https://api.cloudinary.com/v1_1/dvjkkdby1/image/upload', {
                    method: 'POST',
                    body: data,
                });
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const responseData = await res.json();
                console.log('Cloudinary response data:', responseData); // Log the entire response for debugging
                setThumbnailPic(responseData.url);
                console.log('Uploaded Thumbnail URL:', responseData.url);
            } catch (err) {
                console.error('Error uploading to Cloudinary:', err);
            }
        };
        uploadThumbnail();
    }, [thumbnailFile]);

    useEffect(() => {
        if (!files.length) return;
        const uploadPromises = files.map(async (fileItem) => {
            const data = new FormData();
            data.append('file', fileItem);
            data.append('upload_preset', 'pzynf5m0');
            data.append('cloud_name', 'dvjkkdby1');
            try {
                const res = await fetch('https://api.cloudinary.com/v1_1/dvjkkdby1/image/upload', {
                    method: 'POST',
                    body: data
                });
                const data_1 = await res.json();
                return data_1.url;
            } catch (err) {
                console.log(err);
                return null;
            }
        });
        Promise.all(uploadPromises)
            .then((urls) => {
                setMedia(urls);
                console.log('Uploaded URLs:', urls);
            })
            .catch((err) => console.log(err));
    }, [files]);

    useEffect(() => {
        if (!packageFiles.length) return;

        const uploadPromises = packageFiles.map(async (files) => {
            const urls = [];
            for (const file of files) {
                const data = new FormData();
                data.append('file', file);
                data.append('upload_preset', 'pzynf5m0');
                data.append('cloud_name', 'dvjkkdby1');

                try {
                    const res = await fetch('https://api.cloudinary.com/v1_1/dvjkkdby1/image/upload', {
                        method: 'POST',
                        body: data,
                    });
                    const data_1 = await res.json();
                    urls.push(data_1.url);
                } catch (err) {
                    console.log('Error uploading file:', err);
                    urls.push(null);
                }
            }
            return urls;
        });

        Promise.all(uploadPromises)
            .then((urlsArray) => {
                setPackages((prevPackages) => {
                    const updatedPackages = prevPackages.map((pkg, index) => {
                        if (index < urlsArray.length) {
                            return { ...pkg, images: urlsArray[index] };
                        }
                        return pkg;
                    });
                    return updatedPackages;
                });
                console.log('Uploaded URLs:', urlsArray);
            })
            .catch((err) => console.log('Error in uploading:', err));
    }, [packageFiles]);

    const handleDiscard = () => {
        if (!isEditMode) {
            setTitle('');
            setDescription('');
            setPrice('');
            setDetails('');
            setLine1('');
            setLine2('');
            setLandmark('');
            setThumbnailFile(null);
            setThumbnailPreview(null);
            setFiles([]);
            setFilePreviews([]);
            setPackageFiles(packages.map(() => []));
            setFilePackagesPreviews(packages.map(() => []));
            setPackages([
                {
                    title: '',
                    price: '',
                    description: '',
                    times: [],
                    dates: [],
                    images: []
                }
            ]);
            setMedia([]);
        }
        setTitle(isEditMode ? product.title : '');
        setDescription(isEditMode ? product.description : '');
        setPrice(isEditMode ? product.price : '');
        setDetails(isEditMode ? product.details : '');
        setLine1(isEditMode ? product.location.line1 : '');
        setLine2(isEditMode ? product.location.line2 : '');
        setLandmark(isEditMode ? product.location.landmark : '');
        setThumbnailFile(null);
        setThumbnailPreview(isEditMode ? product.thumbnail : null);
        setFiles([]);
        setFilePreviews(isEditMode ? product.image : []);
        setPackageFiles(isEditMode ? product.packages.map(pkg => pkg.images) : packages.map(() => []));
        setFilePackagesPreviews(isEditMode ? product.packages.map(pkg => pkg.images) : packages.map(() => []));
        setPackages(isEditMode ? product.packages : [
            {
                title: '',
                price: '',
                description: '',
                times: [],
                dates: [],
                images: []
            }
        ]);
        setMedia(isEditMode ? product.image : []);


    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const product = {
            title,
            description,
            price: parseFloat(price),
            details,
            location: {
                line1,
                line2,
                landmark
            },
            packages,
            thumbnail: thumbnailPic,
            image: media,
            status,
            category: categories
        };

        try {
            const response = await fetch(isEditMode ? `/api/products/${product_id}` : '/api/products', {
                method: isEditMode ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setMessageText(isEditMode ? 'Product updated successfully!' : 'Product added successfully!');
            setShowMessage(true);
            setMessageType('success');
            setTimeout(() => {
                router.push('/dashboard/products');
            }, 1000);
            
            if (!isEditMode) {
                setTitle('');
                setDescription('');
                setPrice('');
                setDetails('');
                setLine1('');
                setLine2('');
                setLandmark('');
                setThumbnailFile(null);
                setThumbnailPreview(null);
                setFiles([]);
                setFilePreviews([]);
                setPackageFiles(packages.map(() => []));
                setFilePackagesPreviews(packages.map(() => []));
                setPackages([
                    {
                        title: '',
                        price: '',
                        description: '',
                        times: [],
                        dates: [],
                        images: []
                    }
                ]);
                setMedia([]);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessageText(isEditMode ? 'Failed to update product. Please try again.' : 'Failed to add product. Please try again.');
            setShowMessage(true);
            setMessageType('error');
        } finally {
            setLoading(false);
        }
    };


    const handleAddTime = (index) => {
        const newPackages = [...packages];
        newPackages[index].times.push({ startTime: '', endTime: '' });
        setPackages(newPackages);
    };

    const handlePackageChange = (index, field, value) => {
        const newPackages = [...packages];
        if (field === 'times') {
            newPackages[index].times = value.map(timePair => ({
                startTime: timePair[0],
                endTime: timePair[1]
            }));
        } else if (field === 'dates') {
            newPackages[index].dates = value.map(date => date.format("YYYY-MM-DD"));
        } else {
            newPackages[index][field] = value;
        }
        setPackages(newPackages);
    };

    const handleAddPackage = () => {
        setPackages([
            ...packages,
            { title: '', price: '', description: '', times: [], dates: [], images: [] }
        ]);
    };

    const closeMessage = () => {
        setShowMessage(false);
        setMessageText('');
    };

    return (
        <div className="mx-[100px] grid flex-1 gap-4">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
                    <div className="loader"></div>
                </div>
            )}

            {showMessage && <MessageFrom message={messageText} onClose={closeMessage} type={messageType} />}
            <FormHeader back={handleBack} handleButton={handleSubmit} handleDis={handleDiscard} mode={mode} />
            <form onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                    <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                        <Card x-chunk="dashboard-07-chunk-0">
                            <ThumbnailUploader
                                thumbnailFile={thumbnailFile}
                                handleThumbnailChange={handleThumbnailChange}
                                thumbnailPreview={thumbnailPreview}
                                productImage={product?.thumbnail}
                                mode={mode}
                            />
                        </Card>
                        <Card x-chunk="dashboard-07-chunk-0">
                            <CardHeader>
                                <CardTitle>Product Details</CardTitle>
                                <CardDescription>
                                    Enter the details of the product below
                                </CardDescription>
                            </CardHeader>
                            <ProductDetails
                                title={title}
                                description={description}
                                price={price}
                                details={details}
                                setTitle={setTitle}
                                setDescription={setDescription}
                                setPrice={setPrice}
                                setDetails={setDetails}
                            />
                        </Card>
                        <Card x-chunk="dashboard-07-chunk-0">
                            <CardContent>
                                <div className="grid gap-6 sm:grid-cols-3 mt-4 w-full">
                                    <div className="grid gap-3">
                                        <Label htmlFor="category">Status</Label>
                                        <Select onValueChange={setStatus} value={status}>
                                            <SelectTrigger
                                                id="category"
                                                aria-label="Select category"
                                            >
                                                <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="active">Active</SelectItem>
                                                <SelectItem value="inactive">Inactive</SelectItem>
                                                <SelectItem value="pending">Pending</SelectItem>
                                                <SelectItem value="draft">Draft</SelectItem>
                                                <SelectItem value="archived">Archived</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex gap-3 w-full justify-center items-center">
                                        <div className="grid gap-3 w-full">
                                            <Label htmlFor="category">Category</Label>
                                            <Select onValueChange={setCategories} value={categories}>
                                                <SelectTrigger
                                                    id="category"
                                                    aria-label="Select category"
                                                >
                                                    <SelectValue placeholder="Select status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {Products?.map((e) => (
                                                        <>
                                                            <SelectItem value={e._id}>{e.title}</SelectItem>
                                                        </>
                                                    ))}

                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <Link className="mt-7" href="/dashboard/addCategory">
                                         <Button>
                                            Add Category
                                         </Button>
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card x-chunk="dashboard-07-chunk-0">
                            <CardHeader>
                                <CardTitle>Add Product Images</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ImageUploader
                                    handleFileChange={handleFileChange}
                                    filePreviews={filePreviews}
                                />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                        <Card x-chunk="dashboard-07-chunk-0">
                            <CardHeader>
                                <CardTitle>Location Details</CardTitle>
                            </CardHeader>
                            <LocationDetails
                                line1={line1}
                                line2={line2}
                                landmark={landmark}
                                setLine1={setLine1}
                                setLine2={setLine2}
                                setLandmark={setLandmark}
                            />
                        </Card>
                        {packages.map((pkg, index) => (
                            <Card key={index} x-chunk="dashboard-07-chunk-0">
                                <CardHeader>
                                    <CardTitle>Package {index + 1}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-6">
                                        <PackageDetails
                                            index={index}
                                            pkg={pkg}
                                            handlePackageChange={handlePackageChange}
                                        />
                                        <PackageImageUploader
                                            index={index}
                                            handlePackagefileChange={handlePackagefileChange}
                                            filePackagesPreviews={filePackagesPreviews}
                                        />
                                        <Card key={index}>
                                            <PackageTimes
                                                index={index}
                                                times={pkg.times}
                                                handlePackageChange={handlePackageChange}
                                                handleAddTime={handleAddTime}
                                            />
                                        </Card>
                                        <Card >
                                            <MultipleDateSelector
                                                index={index}
                                                dates={pkg.dates}
                                                handlePackageChange={handlePackageChange}
                                            />
                                        </Card>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                        <Button className="mt-4" type="button" onClick={handleAddPackage}>Add More Packages</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProductForm;
