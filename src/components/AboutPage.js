const MemePage = require("../icons/MemePage.png");
const generate = require("../icons/generate.png");
const generated = require("../icons/generated.png");

const AboutPage = () => {
  return (
    <div dir="rtl" className="pt-36 flex flex-col items-center w-full">
      <ul className="text-start px-5">
        <li>
          {" "}
          <h1 className="text-4xl text-white text-center">
            ازاي أستخدمه؟
          </h1>
        </li>
        <li className="flex flex-wrap justify-center items-center py-10">
          <p className="text-white text-2xl max-w-[700px]">
            بعد ما تختار الصورة سواء من الصفحة الرئيسية أو البحث و تفتحها
            هيطلعلك صفحة لميم جاهز معمول بالصورة <br /> <br />
            يا اما تحمل الصورة فاضية أو تعمل منها ميم
          </p>
          <img
            className="border w-[350px] my-10"
            src={MemePage}
            alt="meme page example"
          />
        </li>
        <li className="flex flex-wrap justify-center items-center">
          <p className="text-white text-2xl max-w-[700px]">
            لو اخترت الاختيار الثاني هيتفتحلك صفحة موجود فيها
            مدخلات للكلام اللي انت هتكتبه عددها بيكون حسب الميم نفسه
            <br />
            <br />
            هتكتب اللي انت عاوزه و تضغط set و تستني ثانية و بعدها تقدر تحمل
            الميم اللي انت عامله
          </p>
          <div className="p-10 w-[300px] sm:w-[500px] m-0 sm:mr-2">
            <img
              className="border w-[400px] relative right-16 top-6"
              src={generate}
              alt="generate"
            />
            <img
              className="border w-[400px] relative left-16 bottom-6"
              src={generated}
              alt="generated"
            />
          </div>
        </li>
        <li>
          <p className="p-5 text-center text-xl bg-red-300 text-red-900">
            {" "}
            للأسف الشديد مينفعش تكتب عربي و دي حاجة اكتشفتها متأخر بس قريب هعمل
            نسخة عربي بالكامل{" "}
          </p>
        </li>
      </ul>
    </div>
  );
};
export default AboutPage;
