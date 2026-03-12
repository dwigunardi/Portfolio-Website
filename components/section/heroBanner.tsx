import AnimatedContent from "@/components/AnimatedContent";
import BlurText from "@/components/BlurText";
import CircularText from "@/components/CircularText";
import GradientText from "@/components/GradientText";
import Lanyard from "@/components/lanyard";
import RotatingText from "@/components/RotatingText";
import SplitText from "@/components/SplitText";

export default function HeroBanner() {
    return (
        <section className="w-full h-screen">
            <div className="container mx-auto h-screen relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-6">
                        <div className="relative">
                            <div className="absolute top-40 -right-40 w-full h-full z-50">
                                <AnimatedContent
                                    distance={100}
                                    direction="vertical"
                                    reverse={false}
                                    duration={0.8}
                                    ease="power3.out"
                                    initialOpacity={0}
                                    animateOpacity
                                    scale={1}
                                    threshold={0.1}
                                    delay={0}
                                >
                                    <CircularText
                                        text="FRONT*END*DEVELOPER*"
                                        onHover="speedUp"
                                        spinDuration={20}
                                        className="custom-class cursor-default!"
                                    />

                                </AnimatedContent>
                            </div>
                        </div>
                        <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
                    </div>
                    <div className="col-span-6">
                        <div className="flex flex-col gap-4 items-start justify-center h-full">
                            <AnimatedContent
                                distance={100}
                                direction="horizontal"
                                reverse={false}
                                duration={0.8}
                                ease="power3.out"
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.1}
                                delay={0}
                            >
                                <div className="flex items-center gap-2">
                                    <h1 className="text-2xl font-bold text-white">I`m Ready to Code</h1>
                                    <RotatingText
                                        texts={['Web Development', 'Web Design', 'Web Developer', 'Vibe Coder!']}
                                        mainClassName="px-2 sm:px-2 md:px-3 bg-blue-primary text-black overflow-hidden py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                                        staggerFrom={"last"}
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "-120%" }}
                                        staggerDuration={0.025}
                                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                        rotationInterval={2000}
                                    />
                                </div>
                            </AnimatedContent>
                            <div className="flex flex-col items-start gap-2 mt-4">
                                <SplitText
                                    text="Hi, I'm Dwi Gunardi M"
                                    className="text-6xl font-semibold text-center text-white"
                                    delay={50}
                                    duration={1.25}
                                    ease="power3.out"
                                    splitType="chars"
                                    from={{ opacity: 0, y: 40 }}
                                    to={{ opacity: 1, y: 0 }}
                                    threshold={0.1}
                                    rootMargin="-100px"
                                    textAlign="center"
                                    tag="h1"
                                />
                                <SplitText
                                    text="Frontend Developer"
                                    className="text-6xl font-semibold text-center text-blue-primary"
                                    delay={50}
                                    duration={1.25}
                                    ease="power3.out"
                                    splitType="chars"
                                    from={{ opacity: 0, y: 40 }}
                                    to={{ opacity: 1, y: 0 }}
                                    threshold={0.1}
                                    rootMargin="-100px"
                                    textAlign="center"
                                    tag="h1"
                                />
                                <BlurText
                                    text="I'm a passionate frontend developer specializing in crafting engaging and user-friendly web experiences, with 4 years of experience in the field. Explore my projects, skills, and contact information to see how I can bring your ideas to life with clean code and innovative design."
                                    delay={50}
                                    animateBy="words"
                                    direction="top"
                                    className="text-2xl mb-8 text-white/80 max-w-2xl text-justify"
                                />
                                <div className="flex items-start gap-4 mt-4">
                                    <GradientText
                                        colors={["#38b6ff", "#B19EEF"]}
                                        animationSpeed={6}
                                        showBorder
                                        yoyo
                                        className="px-6 py-4 rounded-md text-sm font-medium"
                                    >
                                        Add a splash of color!
                                    </GradientText>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}