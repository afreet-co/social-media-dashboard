import { OverviewCard } from "../components/OverviewCard";
import { SocialMediaCard } from "../components/SocialMediaCard";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { useAppContext } from "../contexts/AppContext";
import { mains, overviews, totalFollowers } from "../data/index";
const Index = () => {
  const { theme } = useAppContext();
  return (
    <div
      className={`w-screen sm:h-screen px-6 pb-10 sm:px-56 ${theme.background} ${theme.text} duration-150 transition-all`}
    >
      <div className={`flex sm:flex-row flex-col justify-between`}>
        <div
          className={`flex flex-col py-10  border-b border-solid ${theme.borderColor} sm:border-b-0`}
        >
          <h1 className="text-2xl font-bold">Social Media Dashboard</h1>
          <h4 className={`text-sm ${theme.textMuted} font-bold`}>
            Total Followers: {totalFollowers}
          </h4>
        </div>
        <div className="flex sm:space-x-4 flex-row sm:justify-center justify-between py-10">
          <span className={`font-bold ${theme.themeSwitchTextColor}`}>
            Dark Mode
          </span>
          <ThemeSwitcher />
        </div>
      </div>

      <div className="w-full">
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">
          {mains.map((main) => (
            <SocialMediaCard item={main} key={main.id} />
          ))}
        </div>
      </div>
      <h2 className="pt-10 pb-5 text-2xl font-bold">Overview - Today</h2>
      <div className="w-full">
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-6">
          {overviews.map((overview) => (
            <OverviewCard item={overview} key={overview.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Index;
