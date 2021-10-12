import { OverviewCard } from "../components/OverviewCard";
import { SocialMediaCard } from "../components/SocialMediaCard";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { useAppContext } from "../contexts/AppContext";
import { mains, overviews, totalFollowers } from "../data/index";
const Index = () => {
  const { theme } = useAppContext();
  return (
    <div
      className={`w-screen h-screen px-56 ${theme.background} ${theme.text}  duration-150 transition-all`}
    >
      <div className="py-10">
        <div className="flex justify-between items-center ">
          <h1 className="text-2xl font-bold">Social Media Dashboard</h1>
          <div className="flex space-x-4 items-center">
            <span className="font-bold">Dark Mode</span>
            <ThemeSwitcher />
          </div>
        </div>

        <h4 className={`text-sm ${theme.textMuted} font-bold`}>
          Total Followers: {totalFollowers}
        </h4>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-4 gap-4">
          {mains.map((main) => (
            <SocialMediaCard item={main} key={main.id} />
          ))}
        </div>
      </div>
      <h2 className="pt-10 pb-5 text-2xl font-bold">Overview - Today</h2>
      <div className="w-full">
        <div className="grid grid-cols-4 gap-6">
          {overviews.map((overview) => (
            <OverviewCard item={overview} key={overview.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Index;
