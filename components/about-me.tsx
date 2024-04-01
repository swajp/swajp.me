import MaxWidthWrapper from "./max-width-wrapper";
import CodingHours from "./coding-hours";
import CV from "./cv";

export default function AboutMe() {
  return (
    <MaxWidthWrapper className="py-10 md:py-20">
      <h2 className="text-4xl font-bold mb-4">About me</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="grid grid-cols-2 gap-4">
          <CodingHours />
          <CV />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
