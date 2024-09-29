import { Resource } from "./user";

export type Event = {
  id: string;
  title: string;
  description?: string;
  type: string;
};
export const events: Event[] = [
  {
    id: "event1",
    title: "Beginner's Coding Workshop",
    description: "A workshop for complete beginners to learn the basics of coding.",
    type: Resource.event_basic,
  },
  {
    id: "event2",
    title: "Advanced JavaScript Bootcamp",
    description: "A bootcamp covering advanced JavaScript concepts and best practices.",
    type: Resource.event_premium,
  },
  {
    id: "event3",
    title: "Intro to Web Development",
    description: "An introduction to the fundamentals of web development, covering HTML, CSS, and JavaScript.",
    type: Resource.event_basic,
  },
  {
    id: "event4",
    title: "Full-Stack Development Masterclass",
    description: "A masterclass that covers full-stack web development with a focus on modern technologies.",
    type: Resource.event_premium,
  },
];
