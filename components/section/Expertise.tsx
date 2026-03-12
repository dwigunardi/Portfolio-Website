import AnimatedContent from "../AnimatedContent";
import ShinyText from "../ShinyText";

export default function Expertise() {
    return (
        <section id="expertise" className="flex flex-col gap-10 text-white">
            <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={true}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
                key="shiny-text"
            >
                <ShinyText
                    text="✨ Specialties"
                    speed={2}
                    delay={2}
                    color="#38b6ff"
                    shineColor="#ffffff"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                    className="text-2xl"

                />
            </AnimatedContent>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold">Frontend Development</h3>
                    <ul className="list-disc pl-4">
                        <li>React.js</li>
                        <li>Vue.js</li>
                        <li>Next.js</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold">Backend Development</h3>
                    <ul className="list-disc pl-4">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Nest.js</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
