import DivBanner from "./DivBanner/DivBanner";
import DivSection from "./Section/DivSection/DivSection";
import NewsCard from "./Section/NewsCard/NewsCard";
import Section from "./Section/Section";


const Home = () => {
    return (
        <div>
           <DivBanner></DivBanner>
           <Section></Section>
           <DivSection></DivSection>
           <NewsCard></NewsCard>
        </div>
    );
};

export default Home;