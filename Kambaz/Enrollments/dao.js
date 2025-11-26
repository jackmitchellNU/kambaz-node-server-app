import { v4 as uuidv4 } from "uuid";
export default function EnrollmentsDao(db) {
  function enrollUserInCourse(userId, courseId) {
    const { enrollments } = db;
    enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
  }
  function findUsersForCourse(courseId) {
    const { enrollments, users } = db;
    const enrolledUserIds = enrollments
      .filter((e) => e.course === courseId)
      .map((e) => e.user);
    return users.filter((u) => enrolledUserIds.includes(u._id));
  }
  return { enrollUserInCourse, findUsersForCourse };
}
