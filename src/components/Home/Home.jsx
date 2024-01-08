import DivBanner from "./DivBanner/DivBanner";
import DivSection from "./Section/DivSection/DivSection";
import LiveHeading from "./Section/LiveHeading/LiveHeading";
import NewsCard from "./Section/NewsCard/NewsCard";
import Section from "./Section/Section";


const Home = () => {
    return (
        <div>
           <DivBanner></DivBanner>
           <Section></Section>
           <DivSection></DivSection>
           <NewsCard></NewsCard>
           <LiveHeading></LiveHeading>
        </div>
    );
};

export default Home;