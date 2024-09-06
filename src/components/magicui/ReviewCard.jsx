import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
    {
        name: "Nelson",
        username: "@Hovi",
        body: "I've never seen anything like this before. It's amazing. I love it. and i want to work with her again and agaiin  it feels so much amazing to work with him ",
        img: "/images/banner-img.png"
    },
    {
        name: "George",
        username: "@George",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill"
    },
    {
        name: "Foluke",
        username: "@ClassicSparkles",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john"
    },
    {
        name: "Jackson",
        username: "@jackson",
        body: "Her dedication to teamwork is evident as she consistently provides timely and valuable feedbacks on projects.",
        img: "https://avatar.vercel.sh/jaskson"
    },
    {
        name: "Jane",
        username: "@jane",
        body: "She demonstrates great talent and a strong work ethic.",
        img: "https://avatar.vercel.sh/jane"
    },
    {
        name: "Naomi",
        username: "@Naomi",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/Naomi"
    },
    {
        name: "Joy",
        username: "@jaytinental",
        body: "This is awesome. I love it.",
        img: "https://avatar.vercel.sh/joy"
    },
    {
        name: "Tolu",
        username: "@Tolu",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/Tolu"
    },
    {
        name: "Oluwatobi",
        username: "@thechosendevop",
        body: "Incredible!",
        img: "https://avatar.vercel.sh/Naomi"
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
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
    );
};

export function MarqueeDemo() {  // <-- Renamed to MarqueeDemo
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
export default MarqueeDemo;  // <-- Renamed to MarqueeDemo
