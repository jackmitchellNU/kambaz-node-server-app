import EnrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app, db) {
  const dao = EnrollmentsDao(db);

  const findUsersForCourse = (req, res) => {
    const { courseId } = req.params;
    const users = dao.findUsersForCourse(courseId);
    res.json(users);
  };

  app.get("/api/courses/:courseId/users", findUsersForCourse);
}
