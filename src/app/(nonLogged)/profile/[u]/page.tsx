"use client";
import {
  Achievements,
  Certifications,
  Contact,
  Education,
  Experiences,
  Header,
  Languages,
  Projects,
  Skills,
} from "@/components/profiles";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRetrieveUserProfileQuery } from "@/redux/features/authApiSlice";

const ProfilePage = ({ params }) => {
  const { data, error, isLoading } = useRetrieveUserProfileQuery(params.u);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  const user = data?.user;
  const profile = data?.profile;

  const {
    title,
    bio,
    location,
    website,
    phone_numbers,
    social_media,
    experiences,
    educations,
    skills,
    languages,
    interests,
    projects,
    certifications,
    achievements,
  } = profile;

  return (
    <div className="pl-5 py-8">
      <Header
        name={user?.first_name + " " + user?.last_name}
        profile_picture={`${process.env.NEXT_PUBLIC_HOST}/${user?.profile_picture}`}
        bio={bio}
        title={title}
        className="mb-5"
      />
      <div className="flex gap-8">
        <div className="basis-1/2">
          <Contact
            location={location}
            phoneNumbers={phone_numbers}
            socialMedia={social_media}
            website={website}
          />
          {languages && languages.length > 0 && (
            <Languages languages={languages} className="mt-8" />
          )}

          {interests && interests.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-2">Interests</h2>
              <ul className="list-disc list-inside mb-3">
                {interests?.map((interest, index) => (
                  <li key={index} className="mb-2">
                    {interest.name}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <ScrollArea
          autoFocus
          className="h-[585px] pb-0 mb-0 pr-8 flex flex-col"
        >
          {experiences && experiences.length > 0 && (
            <Experiences experiences={experiences} />
          )}

          {educations && educations.length > 0 && (
            <Education educations={educations} />
          )}

          {skills && skills.length > 0 && <Skills skills={skills} />}

          {projects && projects.length > 0 && <Projects projects={projects} />}

          {certifications && certifications.length > 0 && (
            <Certifications certifications={certifications} />
          )}

          {achievements && achievements.length > 0 && (
            <Achievements achievements={achievements} />
          )}
        </ScrollArea>
      </div>
    </div>
  );
};

export default ProfilePage;
