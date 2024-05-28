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

const ProfilePage = () => {
  const profile = {
    id: 16,
    user: 2,
    bio: "A passionate developer, competitive programmer and quick learner. Love to code and learn new things.",
    location: "Rainbow Vally, Fasertek Road, Vatara Thana, Dhaka Bangladesh",
    birth_date: null,
    website: "beehsan.pages.dev",
    phone_numbers: ["+8801641723411"],
    social_media: [
      "https://www.linkedin.com/inehsan18t",
      "https://github.com/ehsan18t",
      "mailto:ehsan18t@gmail.com",
    ],
    experiences: [
      {
        title: "OS Modder",
        description: "Modify Windows OS with many tweaks and patches",
        start_date: "2018-05-01",
        end_date: "null",
      },
      {
        title: "Android ROM Developer",
        description: "AOSP Custom ROM\nReverse Engineered OEM ROM",
        start_date: "2018-05-01",
        end_date: "2019-12-31",
      },
    ],
    educations: [
      {
        institution: "United International University",
        degree: "B.Sc in Computer Science and Engineering",
        cgpa: "3.22",
        field_of_study: null,
        start_date: "2020-05-01",
        end_date: "null",
      },
    ],
    skills: [
      {
        name: "Linux",
        proficiency: null,
      },
      {
        name: "Bash",
        proficiency: null,
      },
      {
        name: "Batch",
        proficiency: null,
      },
      {
        name: "Python",
        proficiency: null,
      },
      {
        name: "PHP",
        proficiency: null,
      },
      {
        name: "SQL",
        proficiency: null,
      },
      {
        name: "Googling",
        proficiency: null,
      },
      {
        name: "HTML",
        proficiency: null,
      },
      {
        name: "CSS",
        proficiency: null,
      },
      {
        name: "JavaScript",
        proficiency: null,
      },
      {
        name: "TailwindCSS",
        proficiency: null,
      },
      {
        name: "React",
        proficiency: null,
      },
      {
        name: "Svelte",
        proficiency: null,
      },
      {
        name: "C",
        proficiency: null,
      },
      {
        name: "C++",
        proficiency: null,
      },
      {
        name: "Java",
        proficiency: null,
      },
      {
        name: "Django",
        proficiency: null,
      },
      {
        name: "Git",
        proficiency: null,
      },
      {
        name: "GitHub",
        proficiency: null,
      },
      {
        name: "Github Action",
        proficiency: null,
      },
      {
        name: "Vim",
        proficiency: null,
      },
      {
        name: "Markdown",
        proficiency: null,
      },
      {
        name: "Figma",
        proficiency: null,
      },
      {
        name: "Jira",
        proficiency: null,
      },
      {
        name: "Scrum",
        proficiency: null,
      },
      {
        name: "Photoshop",
        proficiency: null,
      },
      {
        name: "Filmora",
        proficiency: null,
      },
      {
        name: "MS Office",
        proficiency: null,
      },
      {
        name: "Powershell",
        proficiency: null,
      },
      {
        name: "VBS",
        proficiency: null,
      },
      {
        name: "Registry",
        proficiency: null,
      },
    ],
    languages: [
      {
        language: "Bengali",
        proficiency: "Native",
      },
      {
        language: "English",
        proficiency: "Fluent",
      },
    ],
    interests: [
      {
        name: "Development",
      },
      {
        name: "Cyber Security",
      },
      {
        name: "Reverse Engineering",
      },
    ],
    projects: [
      {
        name: "Contest Reminder",
        description:
          "An amazing automation tool to remind you about upcoming contests from various judge like CodeForces, CodeChef, Atcoder (user selected judges) etc. It doesn’t require any API key or login or any computer. It uses web scraping to get the data. Just setup and forget. Initially created with java, currently recreating with python.",
        tags: ["Java", "Python"],
        start_date: null,
        end_date: null,
      },
      {
        name: "Course Assistant",
        description:
          "An allrounder helper for undergraduate student which solves real-life problems. It helps to manage course, assignments, exams, attendance, grades, etc. It also has a built-in timetable generator, attendance tracker, grade calculator, etc. Initially created with php, recently recreated with django.",
        tags: [
          "HTML",
          "CSS",
          "TailwindCSS",
          "JavaScript",
          "PHP",
          "Django",
          "SQL",
        ],
        start_date: null,
        end_date: null,
      },
      {
        name: "MagicX Toolbox",
        description:
          "A script based ultimate tool to control almost everything in windows.",
        tags: ["Batch", "Powershell", "VBS", "Registry"],
        start_date: null,
        end_date: null,
      },
      {
        name: "Win10 Ultimate System Tweaks",
        description:
          "A script/tool to make windows 10 better by adding useful features & tools, disabling useless services, turning off logging and sending data to third-party and removing garbage.",
        tags: ["Batch", "Powershell", "VBS", "Registry"],
        start_date: null,
        end_date: null,
      },
    ],
    certifications: [
      {
        name: "CCNA: Introduction to Networks",
        authority: "CISCO",
        description:
          "Completed CISCO Certified Network Associate: Introduction to Networks with 90% score.",
        date: "2023-03-01",
      },
    ],
    publications: [],
    references: [],
    hobbies: [],
    achievements: [
      {
        name: "UIU Project Show Champion Fall 2021",
        description:
          'It’s a project competition where we have to make a project in a team of 3-4 members. We made a project named "Course Assistant" which is a web application to manage everything related course/education of a student. We won the competition by beating 20+ teams. Additionally got proposal from our instructor to open a startup with it.',
        date: "2021-12-01",
      },
    ],
    created_at: "2024-05-28T06:43:39.467949Z",
    updated_at: "2024-05-28T06:43:39.467949Z",
  };

  const name = "Ehsan Khan";
  const title = "Software Engineer";
  const profile_picture =
    "http://127.0.0.1:8000/media/profile_pictures/avatar-male.png";

  const {
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
        name={name}
        profile_picture={profile_picture}
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
          <Languages languages={languages} className="mt-8" />

          <h2 className="text-2xl font-bold mb-2">Interests</h2>
          <ul className="list-disc list-inside mb-3">
            {interests?.map((interest, index) => (
              <li key={index} className="mb-2">
                {interest.name}
              </li>
            ))}
          </ul>
        </div>

        <ScrollArea autoFocus className="h-[585px] pb-0 mb-0 pr-8">
          <Experiences experiences={experiences} className="mt-8" />
          <Education educations={educations} className="mt-8" />
          <Skills skills={skills} className="mt-8" />
          <Projects projects={projects} className="mt-8" />
          <Certifications certifications={certifications} className="mt-8" />
          <Achievements achievements={achievements} className="mt-8" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default ProfilePage;
