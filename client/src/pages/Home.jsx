import AuthorsProfiles from './../components/HomePageSubComponents/AuthorsProfiles';
import ChooseCategory from './../components/HomePageSubComponents/ChooseCategory';
import RecentPosts from "../components/HomePageSubComponents/RecentPosts";
import FeaturedContent from "../components/HomePageSubComponents/FeaturedContent";
import Banner from "../components/HomePageSubComponents/Banner";
import NewsletterSignup from '../components/HomePageSubComponents/NewsletterSignup';

const Home = () => {
  return (
    <div className="h-screen overflow-y-auto scrollbar-none p-5">
      <Banner />
      <FeaturedContent />
      <RecentPosts />
      <ChooseCategory />
      <AuthorsProfiles />
      <NewsletterSignup />
    </div>
  )
}

export default Home