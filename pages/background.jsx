import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import Certification_Card from "../components/Background/Certification_Card";
import Project_Card from "../components/Background/Project_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

function Background() {

    const { isLoading, isError, error, data } = useQuery('background', () =>
        axios.get('api/background').then(res => res.data)
    );

    if (isError) {
        console.error('Error fetching background data:', error);
        // You can optionally render an error message to the user here
    }
    
    return (
        <BannerLayout>
            <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
                <div className="flex flex-col gap-y-10 order-2 md:order-1 md:mr-12">
                    <div>
                        <div className="text-xl text-Snow font-semibold">Education</div>
                        <div className="flex flex-col gap-y-4 mt-4">
                            {isLoading ?
                                [1, 2].map((_, i) => (
                                    <ParagraphSkeleton key={i} className={"p-8 h-full w-full relative"} />
                                ))
                                :
                                data && data[0]?.eduCards?.map((cardData) => (
                                    <Edu_Card key={cardData.id} data={cardData} />
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="text-xl text-Snow font-semibold">Certifications</div>
                        <div className="flex flex-col gap-y-4 mt-4">
                            {isLoading ?
                                [1, 2, 3].map((_, key) => (
                                    <ParagraphSkeleton key={key} className={"p-8 h-full w-full relative"} />
                                ))
                                :
                                data && data[0]?.certificationCards?.map((cardData) => (
                                    <Certification_Card key={cardData.id} data={cardData} />
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="text-xl text-Snow font-semibold">Personal Projects</div>
                        <div className="flex flex-col gap-y-4 mt-4">
                            {isLoading ?
                                [1, 2, 3].map((_, key) => (
                                    <ParagraphSkeleton key={key} className={"p-8 h-full w-full relative"} />
                                ))
                                :
                                data && data[0]?.projectCards?.map((cardData) => (
                                    <Project_Card key={cardData.id} data={cardData} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <div className="flex flex-col gap-y-4 md:ml-12">
                        <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">Experience</div>

                        {isLoading ?
                            [1, 2, 3].map((_, i) => (
                                <ParagraphSkeleton key={i} className={"p-8 h-full w-full relative"} />
                            ))
                            :
                            data && data[1]?.expCards?.map((cardData) => (
                                <Exp_Card key={cardData.id} data={cardData} />
                            ))
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
}

export default Background;
