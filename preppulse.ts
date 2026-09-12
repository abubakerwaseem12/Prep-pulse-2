import type { Lecture } from "./types";

// --- Constants ---
const YOUTUBE_BASE_URL = "https://www.youtube.com/watch?v=";
const YOUTUBE_THUMB_BASE_URL = "https://i.ytimg.com/vi";

// --- Helper Functions ---

/**
 * Generates a high-quality thumbnail URL for a given YouTube video ID.
 * @param id - The YouTube video ID.
 * @returns The direct URL to the video thumbnail.
 */
export function getThumbnailUrl(id: string): string {
  return `${YOUTUBE_THUMB_BASE_URL}/${id}/hqdefault.jpg`;
}

/**
 * Generates the standard YouTube watch URL for a given video ID.
 * @param id - The YouTube video ID.
 * @returns The full YouTube watch URL.
 */
export function getVideoUrl(id: string): string {
  return `${YOUTUBE_BASE_URL}${id}`;
}

// --- Mock Data ---

export const SAMPLE_LECTURES: Lecture[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    title: "Java Exception Handling — Complete Exam Guide",
    youtubeId: "1XAfapkBQjk",
    youtubeUrl: getVideoUrl("1XAfapkBQjk"),
    thumbnailUrl: getThumbnailUrl("1XAfapkBQjk"),
    channelName: "Telusko",
    subject: "Java",
    topic: "Exception Handling",
    duration: "14:22",
    durationMinutes: 14,
    tags: ["Exam Focused", "Beginner"],
    rating: 4.8,
    recommendationCount: 312,
    reviewCount: 86,
    reviews: [
      "Explains the concept clearly.",
      "Very useful before exams.",
      "Good for 5-mark questions.",
      "Short and easy to understand.",
    ],
    createdAt: "2026-01-12T10:00:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    title: "Java Inheritance in 12 Minutes",
    youtubeId: "8Xyn80Kq2Qc",
    youtubeUrl: getVideoUrl("8Xyn80Kq2Qc"),
    thumbnailUrl: getThumbnailUrl("8Xyn80Kq2Qc"),
    channelName: "Programming with Mosh",
    subject: "Java",
    topic: "Inheritance",
    duration: "12:08",
    durationMinutes: 12,
    tags: ["Quick Revision", "Exam Focused"],
    rating: 4.7,
    recommendationCount: 278,
    reviewCount: 64,
    reviews: [
      "Perfect last-night revision.",
      "Super clear examples.",
      "Covers exam questions well.",
    ],
    createdAt: "2026-02-03T10:00:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    title: "Data Structures: Arrays, Stacks & Queues",
    youtubeId: "RBSGKlAvoiM",
    youtubeUrl: getVideoUrl("RBSGKlAvoiM"),
    thumbnailUrl: getThumbnailUrl("RBSGKlAvoiM"),
    channelName: "freeCodeCamp.org",
    subject: "Data Structures",
    topic: "Linear Data Structures",
    duration: "28:40",
    durationMinutes: 29,
    tags: ["Exam Focused", "Beginner"],
    rating: 4.9,
    recommendationCount: 401,
    reviewCount: 120,
    reviews: [
      "Best overview before DSA papers.",
      "Visuals make stacks click.",
    ],
    createdAt: "2025-11-20T10:00:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    title: "DBMS Normalization — 1NF, 2NF, 3NF, BCNF",
    youtubeId: "GFQaEYEc8_8",
    youtubeUrl: getVideoUrl("GFQaEYEc8_8"),
    thumbnailUrl: getThumbnailUrl("GFQaEYEc8_8"),
    channelName: "Gate Smashers",
    subject: "DBMS",
    topic: "Normalization",
    duration: "18:05",
    durationMinutes: 18,
    tags: ["Exam Focused", "Quick Revision"],
    rating: 4.8,
    recommendationCount: 355,
    reviewCount: 97,
    reviews: [
      "Good for 5-mark questions.",
      "Normalization finally made sense.",
    ],
    createdAt: "2026-03-01T10:00:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    title: "Computer Organization: CPU, ALU & Control Unit",
    youtubeId: "1iS6-SQeHns",
    youtubeUrl: getVideoUrl("1iS6-SQeHns"),
    thumbnailUrl: getThumbnailUrl("1iS6-SQeHns"),
    channelName: "Neso Academy",
    subject: "Computer Organization",
    topic: "CPU Architecture",
    duration: "22:14",
    durationMinutes: 22,
    tags: ["Exam Focused"],
    rating: 4.6,
    recommendationCount: 190,
    reviewCount: 41,
    reviews: [
      "Diagrams match our textbook.",
      "Useful before internals.",
    ],
    createdAt: "2026-01-28T10:00:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    title: "Matrices for Exams — Quick Revision",
    youtubeId: "JKCjsYEebxs",
    youtubeUrl: getVideoUrl("JKCjsYEebxs"),
    thumbnailUrl: getThumbnailUrl("JKCjsYEebxs"),
    channelName: "The Organic Chemistry Tutor",
    subject: "Mathematics",
    topic: "Matrices",
    duration: "16:50",
    durationMinutes: 17,
    tags: ["Quick Revision", "Beginner"],
    rating: 4.7,
    recommendationCount: 221,
    reviewCount: 58,
    reviews: [
      "Short and easy to understand.",
      "Worked examples are exam-style.",
    ],
    createdAt: "2026-04-09T10:00:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440007",
    title: "Python Functions & Recursion — Exam Focused",
    youtubeId: "kqtD5dpn9C8",
    youtubeUrl: getVideoUrl("kqtD5dpn9C8"),
    thumbnailUrl: getThumbnailUrl("kqtD5dpn9C8"),
    channelName: "Programming with Mosh",
    subject: "Python",
    topic: "Functions",
    duration: "19:33",
    durationMinutes: 20,
    tags: ["Exam Focused", "Beginner"],
    rating: 4.5,
    recommendationCount: 164,
    reviewCount: 39,
    reviews: [
      "Clear pacing for beginners.",
      "Great warmup before lab exams.",
    ],
    createdAt: "2026-02-18T10:00:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440008",
    title: "C Pointers Explained Simply",
    youtubeId: "zuegQmMdy8M",
    youtubeUrl: getVideoUrl("zuegQmMdy8M"),
    thumbnailUrl: getThumbnailUrl("zuegQmMdy8M"),
    channelName: "CS50",
    subject: "C Programming",
    topic: "Pointers",
    duration: "24:11",
    durationMinutes: 24,
    tags: ["Beginner", "Exam Focused"],
    rating: 4.9,
    recommendationCount: 388,
    reviewCount: 110,
    reviews: [
      "Best pointer intuition lecture.",
      "Very useful before exams.",
    ],
    createdAt: "2025-12-02T10:00:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440009",
    title: "Java Exception Handling — 8 Minute Crash",
    youtubeId: "W4K9Mx7zs4s",
    youtubeUrl: getVideoUrl("W4K9Mx7zs4s"),
    thumbnailUrl: getThumbnailUrl("W4K9Mx7zs4s"),
    channelName: "CodeWithHarry",
    subject: "Java",
    topic: "Exception Handling",
    duration: "08:12",
    durationMinutes: 8,
    tags: ["Quick Revision"],
    rating: 4.4,
    recommendationCount: 142,
    reviewCount: 28,
    reviews: [
      "Short and easy to understand.",
      "Use this if you only have 10 minutes.",
    ],
    createdAt: "2026-05-14T10:00:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440010",
    title: "SQL Joins for DBMS Exams",
    youtubeId: "9yeOJ0ZMUYw",
    youtubeUrl: getVideoUrl("9yeOJ0ZMUYw"),
    thumbnailUrl: getThumbnailUrl("9yeOJ0ZMUYw"),
    channelName: "Kevin Stratvert",
    subject: "DBMS",
    topic: "SQL Joins",
    duration: "11:47",
    durationMinutes: 12,
    tags: ["Quick Revision", "Exam Focused"],
    rating: 4.6,
    recommendationCount: 203,
    reviewCount: 44,
    reviews: [
      "Joins finally clicked.",
      "Good for 5-mark questions.",
    ],
    createdAt: "2026-03-22T10:00:00.000Z",
  },
];

export const TRENDING_IDS: string[] = [
  "550e8400-e29b-41d4-a716-446655440001",
  "550e8400-e29b-41d4-a716-446655440003",
  "550e8400-e29b-41d4-a716-446655440004",
  "550e8400-e29b-41d4-a716-446655440008",
];

// --- Utilities ---

/**
 * Retrieves a specific lecture by its unique database ID.
 * @param id - The UUID of the lecture.
 * @returns The Lecture object if found, otherwise undefined.
 */
export function getLectureById(id: string): Lecture | undefined {
  return SAMPLE_LECTURES.find((lecture) => lecture.id === id);
}

/**
 * Searches the mock database for lectures matching a specific query string.
 * It checks the title, subject, topic, channel name, and associated tags.
 * 
 * @param query - The user's search string.
 * @returns An array of matching Lecture objects.
 */
export function searchLectures(query: string): Lecture[] {
  const q = query.trim().toLowerCase();
  
  // Return early if no search query is provided
  if (!q) return SAMPLE_LECTURES;
  
  return SAMPLE_LECTURES.filter((lecture) => {
    // Combine relevant fields into a single searchable string for easy matching
    const searchableContent = [
      lecture.title,
      lecture.subject,
      lecture.topic,
      lecture.channelName,
      ...lecture.tags, 
    ].join(" ").toLowerCase();

    return searchableContent.includes(q);
  });
}