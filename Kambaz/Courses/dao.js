import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
import EnrollmentsDao from "../Enrollments/dao.js";

const enrollmentsDao = EnrollmentsDao();

export default function CoursesDao() {
  function findAllCourses() {
    return model.find();
  }
  async function findCoursesForEnrolledUser(userId) {
    return enrollmentsDao.findCoursesForUser(userId);
  }

  function createCourse(course) {
    const newCourse = { ...course, _id: uuidv4() };
    return model.create(newCourse);
  }

  function deleteCourse(courseId) {
    return model.deleteOne({ _id: courseId });
  }

  function updateCourse(courseId, courseUpdates) {
    return model.updateOne({ _id: courseId }, { $set: courseUpdates });
  }

  return {
    findAllCourses,
    findCoursesForEnrolledUser,
    createCourse,
    deleteCourse,
    updateCourse,
  };
}
