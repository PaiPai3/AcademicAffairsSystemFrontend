#include <iostream>
#include <string>
#include <vector>
#include <iomanip>
using namespace std;

// 定义学生结构体
struct Student {
    string studentID;
    string password;
    string name;
};

// 定义成绩结构体
struct Grade {
    string courseID;
    string courseName;
    int credits;      // 学分
    float score;      // 成绩
    string teacher;
    string year;      // 学年
};

// 模拟学生信息
vector<Student> students = {
        {"S12345678", "password123", "Alice"},
        {"S87654321", "mypassword", "Bob"}
};

// 模拟成绩数据
vector<Grade> grades = {
        {"C1001", "Math", 4, 85.5, "Mr. Zhang", "2024"},
        {"C1002", "English", 3, 92.0, "Ms. Wang", "2024"},
        {"C1003", "Physics", 4, 78.0, "Dr. Li", "2023"},
        {"C1004", "Chemistry", 3, 88.0, "Prof. Zhou", "2023"}
};

// 校验登录
bool login(const string& id, const string& pwd, string& studentName) {
    for (const auto& student : students) {
        if (student.studentID == id && student.password == pwd) {
            studentName = student.name;
            return true;
        }
    }
    return false;
}

// 查询指定课程成绩
bool queryCourseGrade(const string& studentYear, const string& courseID) {
    bool found = false;
    cout << left << setw(15) << "课程编号"
         << setw(15) << "课程名称"
         << setw(15) << "学分"
         << setw(15) << "成绩"
         << setw(15) << "授课教师" << endl;
    for (const auto& grade : grades) {
        if (grade.year == studentYear && (courseID == "0" || grade.courseID == courseID)) {
            cout << left << setw(15) << grade.courseID
                 << setw(15) << grade.courseName
                 << setw(15) << grade.credits
                 << setw(15) << fixed << setprecision(1) << grade.score
                 << setw(15) << grade.teacher << endl;
            found = true;
        }
    }
    return found;
}

int main() {
    string studentID, password, studentName;
    string year, courseID;

    cout << "=== 学生成绩查询系统 ===" << endl;

    // 登录校验
    cout << "请输入学号: ";
    cin >> studentID;
    cout << "请输入密码: ";
    cin >> password;

    if (!login(studentID, password, studentName)) {
        cout << "登录失败！请检查学号或密码。" << endl;
        return 0;
    }

    cout << "欢迎使用，" << studentName << "!" << endl;

    while (true) {
        // 输入年份
        cout << "请输入查询年份: ";
        cin >> year;

        // 输入课程编号
        cout << "请输入课程编号 (输入0查询所有课程): ";
        cin >> courseID;

        // 查询成绩
        bool found = queryCourseGrade(year, courseID);
        if (!found) {
            cout << "未找到相关课程成绩，请检查输入信息。" << endl;
        }

        // 是否继续
        char choice;
        cout << "是否继续查询？(y/n): ";
        cin >> choice;
        if (choice != 'y' && choice != 'Y') {
            break;
        }
    }
    cout << "系统退出，感谢使用！" << endl;
    return 0;
}
