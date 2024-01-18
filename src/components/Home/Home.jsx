import DivBanner from "./DivBanner/DivBanner";
import DivSection from "./Section/DivSection/DivSection";
import LiveHeading from "./Section/LiveHeading/LiveHeading";
import NewsCard from "./Section/NewsCard/NewsCard";
import Section from "./Section/Section";
import Video from "./Section/Video/Video";


const Home = () => {
    return (
        <div>
           <DivBanner></DivBanner>
           <Section></Section>
           <DivSection></DivSection>
           <NewsCard></NewsCard>
           <LiveHeading></LiveHeading>
           <Video></Video>
        </div>
    );
};

export default Home;