import { cn } from "@/lib/utils"
import Marquee from "@/components/magicui/marquee"
import Heading from "../Component/Heading"


const reviews = [
    {
        name: "Nelson",
        username: "@Hovi",
        body: "I've never seen anything like this before. It's amazing. I love it. and i want to work with her again and agaiin  it feels so much amazing to work with him ",
        img: "/images/tolu.jpeg"
    },
    {
        name: "George",
        username: "@George",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "/images/tobi.jpeg"
    },
    {
        name: "Foluke",
        username: "@ClassicSparkles",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "/images/jane.jpeg"
    },
    {
        name: "Jackson",
        username: "@jackson",
        body: "Her dedication to teamwork is evident as she consistently provides timely and valuable feedbacks on projects.",
        img: "/images/jack.jpeg"
    },
    {
        name: "Jane",
        username: "@jane",
        body: "She demonstrates great talent and a strong work ethic.",
        img: "/images/jane.jpeg"
    },
    {
        name: "Naomi",
        username: "@Naomi",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "/images/naomi.jpeg"
    },
    {
        name: "Joy",
        username: "@jaytinental",
        body: "This is awesome. I love it.",
        img: "/images/joy.jpeg"
    },
    {
        name: "Tolu",
        username: "@Tolu",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "/images/tolu.jpeg"
    },
    {
        name: "Oluwatobi",
        username: "@thechosendevop",
        body: "Incredible!",
        img: "/images/tobi.jpeg"
    }
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({ img, name, username, body }) => {
    return (

        <>

            <figure
                className={cn(
                    "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                    // light styles
                    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                    // dark styles
                    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                )}
            >
                <div className="flex flex-row items-center gap-2">
                    <img className="rounded-full" width="32" height="32" alt="" src={img} />
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium dark:text-white">
                            {name}
                        </figcaption>
                        <p className="text-xs font-medium dark:text-white/40">{username}</p>
                    </div>
                </div>
                <blockquote className="mt-2 text-sm">{body}</blockquote>
            </figure>
        </>
    )
}




import React from 'react'

const Reviews = () => {
    return (
        <div id="testimonials">
            <Heading heading='Testimonials' subHeading={"What People Think about me"} />
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map(review => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map(review => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>


        </div>
    )
}

export default Reviews