import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const CarouselImage = ({ images }) => {
    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {images?.map((url, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="relative aspect-square flex items-center justify-center p-6">
                                    <Image
                                        src={url}
                                        alt={`image-${index}`}
                                        fill
                                        className="object-fit rounded-xl"
                                        sizes="(max-width: 640px) 100vw, 640px"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {images?.length > 1 && (
                <>
                    <CarouselPrevious type="button" />
                    <CarouselNext type="button" />
                </>
            )}
        </Carousel>
    );
};

export default CarouselImage;
