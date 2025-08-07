import { useQuery } from "react-query";
import axios from "axios";
import Image from "next/image";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";
import Link from "next/link";
import Head from "next/head";

const Portfolio = () => {
    const { isLoading, data } = useQuery('portfolio', () => axios.get('api/portfolio').then(res => res.data));

    return (
        <BannerLayout>
            <Head>
                <title>Portfolio | Andy Setiyawan</title>
                <meta name="description" content="Browse a selection of projects managed and developed by Andy Setiyawan, showcasing expertise in cloud infrastructure, DevOps, and web technologies." key="desc" />
            </Head>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-2 pt-10">
                {isLoading ?
                    [1, 2, 3, 4, 5, 6].map((_, i) => (
                        <ImageAndParagraphSkeleton key={i} className={"p-6"} />
                    ))
                    :
                    data?.map(item => (
                        <Link key={item.id} href={item.url} target="_blank" className="card_stylings_2">
                            <div className="relative h-60">
                                <Image src={item.image} alt={item.projectName} fill className="object-cover rounded-t-lg" />
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-bold text-Snow">{item.projectName}</h2>
                                <p className="text-sm text-LightGray mt-2">{item.projectDetail}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {item.technologiesUsed.map(tech => (
                                        <span key={tech.tech} className="text-xs bg-Green/10 text-Green px-2 py-1 rounded-full">{tech.tech}</span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <Footer />
        </BannerLayout>
    );
};

export default Portfolio;
