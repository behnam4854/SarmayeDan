// pages/index.js
import Transactions from "./getTransactions";
import UserProfile from "@/app/dashboard/getProfile";
import TransactionForm from "@/app/dashboard/addTransactionFrom";
import BudgetCategories from "@/app/dashboard/getBudgetCategories";

export default function dashboard(){
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI5MDEwNTk0LCJpYXQiOjE3Mjg0MDU3OTQsImp0aSI6IjM1MTI2OGMyZjhjZTRlZTBiZjVlNTg0MGZiZmZhMWQ5IiwidXNlcl9pZCI6MiwiZmlyc3RfbmFtZSI6Ilx1MDYyOFx1MDY0N1x1MDY0Nlx1MDYyN1x1MDY0NSIsImxhc3RfbmFtZSI6Ilx1MDYyN1x1MDY0NVx1MDZjY1x1MDY0Nlx1MDZjYyJ9.jqqa2AVna6CSy-S_xHhK_doSpHobQeSRR-Me_9GoddE"
    return(

      <div className="sb-main-dashboard">
        <nav>
          <div className="nav__brand">
            {/*<Image src="../static/imgs/logo.png" className="nav__brand-img" alt="">*/}
          </div>
          <ul className="nav__main">
            <li><a href="#">پروفایل</a></li>
            <li><a href="#">تراکنش ها</a></li>
            <li><a href="#">پس انداز ها</a></li>
          </ul>
          <ul className="nav__footer">
            <li><a href="#">خروج</a></li>
          </ul>
        </nav>
        <div className="features">
          <UserProfile token={token} />

          <BudgetCategories token={token} />

          <div className="feature feature--2">
            <p>تراکنش های اخیر</p>
            <hr className="feature--line"/>
            <br/>
          <Transactions token={token} />
          </div>
          <div className="feature feature--3">
            <p>خرید جدید</p>

            <TransactionForm token={token} />
          </div>
        </div>
      </div>
    )
}
/**
 * todo 1.create a drop down for the category field
 *      2.find out how can i implement login with nextjs
 *      3.adding functionality to add budget and budget category
 *      4.finding out what is ui
 */

/**
 * Todo today is authentication day and io should implement a login page for my app that recive user data
 * and authenticate using them via token and refresh token
 */
