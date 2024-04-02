import MaxWidthWrapper from "./max-width-wrapper";
import CodingHours from "./coding-hours";
import CV from "./cv";
import Connect from "./connect";
import Available from "./available";
import TechStack from "./techstack";
import Location from "./location";

export default function AboutMe() {
  return (
    <MaxWidthWrapper className="py-10 md:py-20">
      <h2 className="text-4xl font-bold mb-4">About me</h2>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="grid gap-4">
          <Connect />
          <div className="grid grid-cols-2 gap-4">
            <CodingHours />
            <CV />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Available />
            <Location />
          </div>
          <TechStack />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
