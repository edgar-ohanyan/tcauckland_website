import React from "react";
import visasAndPermit_pic from "../../assets/photos/8 reasons to teach internationally.jpg";

import "./visasAndPermits.css";

export default function VisasAndPermits() {
  return (
    <div className="visasAndPermits">
      <div className="main-picture-box">
        <img src={visasAndPermit_pic} className="main-picture" alt="home_bg" />
      </div>
      <div className="page-content">
        <h1 className="page-title">Student Visa</h1>
        <p className="page-content-text-primary">
          As an international student aspiring to study at one of New Zealand's
          esteemed universities, it is essential to understand the{" "}
          <span className="italic">visa requirements</span> mandated by the
          country's immigration laws. These regulations stipulate that all
          international students must possess a valid visa for the entire
          duration of their studies in New Zealand. To commence the application
          process, prospective students must familiarize themselves with the
          visa application requirements and
          <span className="italic"> gather the necessary documents.</span>
          The process can vary depending on factors such as the duration of
          study, the chosen university, and the student's country of origin.
          However, the following details provide a general overview of the
          application process and the key documents typically required:
        </p>
        <div className="chapter-content-text">
          <h2 className="chapter-title">Applying for your visa online:</h2>
          <p className="chapter-content-text">
            You need to apply for your student visa online through
            <a
              className="italic"
              href="https://www.immigration.govt.nz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Immigration New Zealand
            </a>{" "}
            – the process is the same whether you are in New Zealand or
            overseas.
          </p>
          <p>
            You need to
            <a
              className="italic"
              href="https://www.immigration.govt.nz/secure/Login+Working+Holiday"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              create a RealMe account
            </a>{" "}
            to be able to apply for your student visa online. Follow the
            instructions given. If you are not eligible to apply online,
            Immigration NZ will direct you to apply using a paper form.
          </p>
          <p>
            Before applying, please check the visa checklist if you are applying
            for a student visa for the first time:{" "}
            <a
              className="italic"
              href="https://www.immigration.govt.nz/documents/checklists/first-time-student-visa-application-checklist.pdf?_ga=2.207157585.391740053.1574711835-288367170.1555281702"
              target="_blank"
              rel="noopener noreferrer"
            >
              First time student visa checklist
            </a>
          </p>
          <p>Required documents:</p>
          <ol>
            <li>Passport quality photo of yourself, as a JPG file.</li>
            <li>
              Police, medical, or x-ray certificates – you may need to supply
              these. Check the{" "}
              <a
                className="italic"
                href="https://www.immigration.govt.nz/new-zealand-visas/preparing-a-visa-application/medical-info/when-you-need-an-x-ray-or-medical-examination"
                target="_blank"
                rel="noopener noreferrer"
              >
                Immigration New Zealand website
              </a>{" "}
              for more details.
            </li>
            <li>
              Scanned documents – listed on the Immigration New Zealand website.
            </li>
            <li>
              A debit or credit card to pay for your application online.{" "}
              <a
                className="italic"
                href="https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/tools-and-information/fees"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check the details here
              </a>
              .{" "}
            </li>
          </ol>
        </div>
        <div className="separateLine"></div>
        <div className="chapter-content-text">
          <h2 className="chapter-title">Documents you need to provide:</h2>
          <p>
            In order to successfully complete your application, it is crucial
            that you carefully scan and save the following documents as Portable
            Document Format (PDF) files. By doing so, you will be able to
            conveniently upload them to the designated platform or submit them
            electronically.
          </p>
          <h2 className="chapter-title-secondary">For All Students:</h2>
          <p>
            Kindly note that all students are required to upload the following
            documents along with their application. Additional documentation
            guidelines for PhD students and returning AUT students are provided
            in the subsequent sections.
          </p>
          <ol>
            <li>
              Bio-page of your passport: Please ensure that the scanned page
              includes your photo, date of birth details, and other relevant
              information. Kindly verify that your passport has a validity of at
              least six months.
            </li>
            <li>
              Offer of Place: Please upload the official Offer of Place document
              provided by the university.
            </li>
            <li>
              Evidence of international tuition fee payment: You are requested
              to submit one of the following documents:
            </li>
            <ul>
              <li>University receipt or payment acknowledgement letter</li>
              <li>Scholarship confirmation letter</li>
              <li>Financial guarantee</li>
            </ul>
            <li>
              Attendance confirmation from previous institute (for new
              applicants only): If you are a returning student, this document is
              not required.
            </li>
            <li>
              Proof of living expenses (meeting minimum requirements): You need
              to provide one of the following documents:
            </li>
            <ul>
              <li>
                A financial guarantee or scholarship letter indicating full
                funding for the duration of your study
              </li>
              <li>
                A bank statement in your name only, showing a minimum of three
                months of transaction history. Please ensure the bank statement
                is not older than three days at the time of your visa
                application. (Note: Immigration New Zealand does not accept a
                printout of balance only)
              </li>
              <li>
                A completed Sponsorship Form (INZ1025) from a sponsor who is a
                New Zealand resident or citizen. The form should be filled out
                by the same person who completed the form for your previous
                student visa application before your arrival in New Zealand.
              </li>
              <li>
                A completed Financial Undertaking Form (INZ1014) filled out by
                the same person who completed the form for your previous student
                visa application before your arrival in New Zealand.
              </li>
            </ul>
          </ol>
          <h2 className="chapter-title-secondary">For Returning Students:</h2>
          <p>
            If you are a returning student, please note that you need to include
            the following extra documents with your application:
          </p>
          <ol>
            <li>
              Confirmation of enrolment letter: Please upload the official
              letter confirming your enrolment in the current academic period.
            </li>
            <li>
              Academic results for the period of study since your previous
              student visa was issued: You are required to provide your academic
              results for the period of study since your last student visa was
              issued.
            </li>
            <li>
              Letter of Explanation: In case you have unsatisfactory academic
              results as a returning student, it is essential to upload a letter
              of explanation under 'Other documents'. Your letter should be
              addressed to Immigration New Zealand, where you describe the
              factors that affected your previous study and outline your plan to
              achieve better academic results this time.
            </li>
          </ol>
          <h2 className="chapter-title-secondary">
            For Doctor of Philosophy (PhD) Students:
          </h2>
          <p>
            If you are a PhD student, please note that you must include the
            following extra documents with your application. You can upload
            these documents under the 'Other' section of your application:
          </p>

          <ol>
            <li>
              Thesis title (abstract) and the names of all your supervisors:
              Please provide a brief abstract of your thesis title along with
              the names of all your supervisors.
            </li>
            <li>
              Progress update (recent PGR approval): Kindly upload a progress
              update document demonstrating recent Postgraduate Research (PGR)
              approval.
            </li>
            <li>
              Updated CV: Please ensure that your curriculum vitae (CV) is up to
              date and reflects your current academic and research achievements.
            </li>
          </ol>
        </div>
        <div className="separateLine"></div>
        <div className="chapter-content-text">
          <h2 className="chapter-title">After you apply:</h2>
          <p>
            Once you submit your online application, the status will change to
            "submitted". You can log in to the application portal at any time to
            check the status of your application.
          </p>
          <p>
            It is important to check your email inbox regularly, as Immigration
            New Zealand may contact you to provide additional documents or
            information.
          </p>
          <p>
            Immigration New Zealand will issue an outcome on your application.
            If your application is approved and you are issued an eVisa, it will
            be sent to your email address. Make sure to print out your eVisa and
            keep it together with your passport at all times. Please note that
            you will not be issued a visa label.
          </p>
          <p>
            If you have already received your updated visa or an interim visa
            via email, please provide a copy to us as soon as possible so that
            we can forward it to your university.
          </p>
        </div>
        <div className="separateLine"></div>
        <div className="chapter-content-text">
          <h2 className="chapter-title">Why you need a valid student visa:</h2>
          <p>
            The New Zealand Government requires all international students to
            hold a valid student visa for the duration of their academic study
            at New Zealand universities.
          </p>
          <p>
            To complete your enrolment, it is essential to possess a valid
            student visa that accurately reflects your programme and institute
            of study details. It is your responsibility to ensure that your visa
            or permit remains valid throughout the entire duration of your
            study.
          </p>
          <p>
            Not having a valid visa to study in New Zealand universities can
            have serious consequences. If you fail to provide a valid visa, you
            will be denied access to education services at any university in New
            Zealand and may face the risk of being removed from your programme
            of study.
          </p>
        </div>

        <div className="separateLine"></div>
        <div className="chapter-content-text">
          <h2 className="chapter-title">Medical and travel insurance:</h2>
          <p>
            According to The Education (Pastoral Care of International Students)
            Code of Practice 2016, all international students enrolled at
            universities in New Zealand are mandated to have compliant medical
            and travel insurance throughout the duration of their visa and
            period of study.
          </p>
          <p>
            This insurance requirement is in place to ensure that international
            students have access to appropriate medical care and support during
            their stay in New Zealand, as well as to provide coverage for any
            unexpected travel-related incidents or emergencies.
          </p>
          <p>
            The medical insurance should offer comprehensive coverage, including
            but not limited to, medical consultations, hospitalization,
            emergency medical treatment, and repatriation. It should also cover
            pre-existing medical conditions, mental health care, and
            pharmaceutical expenses.
          </p>
          <p>
            Similarly, the travel insurance should provide coverage for
            travel-related risks such as trip cancellation or interruption, lost
            or stolen baggage, personal liability, and emergency assistance
            services.
          </p>
          <p>
            International students are responsible for ensuring that their
            medical and travel insurance policies comply with the requirements
            specified by The Education (Pastoral Care of International Students)
            Code of Practice 2016. It is recommended to carefully review the
            policy terms and conditions, including the coverage limits and
            exclusions, to make an informed decision when selecting an insurance
            provider.
          </p>
          <p>
            By maintaining compliant medical and travel insurance, international
            students can have peace of mind, knowing that they are adequately
            protected and supported throughout their academic journey in New
            Zealand.
          </p>
        </div>

        <div className="separateLine"></div>
        <div className="chapter-content-text">
          <h2 className="chapter-title">As an international student:</h2>
          <p>
            As an international student studying in New Zealand, it is mandatory
            to have appropriate medical and travel insurance that meets the
            requirements of your visa. This insurance coverage should extend for
            the entire duration of your study, including your travel to and from
            New Zealand.
          </p>
          <p>
            To ensure that you are adequately protected, AUT offers the
            Studentsafe Inbound University policy wording, which provides
            comprehensive insurance coverage during your study period.
          </p>
          <p>
            The insurance policy offers protection for various medical expenses,
            including consultations, hospitalization, emergency medical
            treatment, and repatriation. It may also cover pre-existing medical
            conditions and mental health care. Additionally, the policy should
            include coverage for travel-related risks such as trip cancellation
            or interruption, lost or stolen baggage, personal liability, and
            emergency assistance services.
          </p>
          <p>
            Full-year students are required to pay an annual premium, while
            part-year students pay a proportionate amount of the annual premium.
            The premium payment is made to AUT, and it is important to note that
            the premium amount may vary from year to year.
          </p>
          <p>
            By maintaining this appropriate medical and travel insurance, you
            can have peace of mind knowing that you are safeguarded throughout
            your academic journey in New Zealand, with comprehensive coverage
            for any unforeseen medical or travel-related circumstances.
          </p>
        </div>

        <div className="separateLine"></div>
        <div className="chapter-content-text">
          <h2 className="chapter-title">Arranging Studentsafe insurance:</h2>
          <p>
            AUT, which stands for Auckland University of Technology, has
            recently appointed Marsh Limited as the insurance brokers
            responsible for managing the Studentsafe-University insurance plan.
            This decision ensures that international students at AUT have access
            to comprehensive insurance coverage tailored to their needs.
          </p>
          <p>
            The Studentsafe-University insurance plan is underwritten and
            insured by Allianz, a globally recognized insurance company. Allianz
            provides the necessary financial backing and expertise to support
            the insurance coverage offered to AUT students.
          </p>
          <p>
            The Studentsafe-University insurance plan offers comprehensive
            coverage to address a range of potential risks and emergencies that
            students may encounter during their time at AUT. This includes
            coverage for medical expenses, emergency medical evacuation,
            repatriation of remains, personal liability, and travel-related
            incidents. The plan aims to ensure that students have access to
            adequate protection and support in the event of unforeseen
            circumstances or emergencies.
          </p>

          <h4>Insurance Costs (Annual Premium for 2021)</h4>
          <ul>
            <li>Student insurance: NZD $670.00</li>
            <li>
              Family insurance: NZD $1675.00 (includes student, spouse, and
              dependent children)
            </li>
            <li>
              Couple rate: NZD $1340.00 (includes student and spouse or child)
            </li>
          </ul>

          <h4>Arranging Additional Insurance Cover for Your Family</h4>
          <p>
            You have the option to apply for insurance cover for your spouse and
            any dependent children who will be accompanying you to New Zealand
            for the duration of your study. It is important to note that if you
            don't have insurance cover for your family, all medical expenses
            including hospital treatment will be at your own cost.
          </p>
          <h4>How to Apply for Insurance Cover for Your Family</h4>
          <ol>
            <li>
              Download a Family Application Form from the{" "}
              <a
                className="italic"
                href="https://www.insurancesafenz.com/studentsafe/student-safe-inbound-university"
                target="_blank"
                rel="noopener noreferrer"
              >
                Insurancesafe website
              </a>
              .{" "}
            </li>
            <li>Complete the Family Application Form.</li>
            <li>
              Scan and email the form to studenthub@aut.ac.nz no later than the
              Friday before you start your study at AUT.
            </li>
          </ol>
          <p>
            Please make sure to read the policy wording in full before applying
            to ensure it meets your needs.
          </p>

          <h4>Cover Start and End Dates</h4>
          <p>
            For new students, the insurance will start 31 days prior to the
            course start date, including transit from your country of origin to
            New Zealand, or any other date agreed upon in writing.
          </p>
          <p>
            For the majority of students, the insurance cover will end upon
            arrival in your country of origin following the completion of your
            course of study, or:
          </p>
          <ul>
            <li>
              150 days following your course end date or the expiry date of your
              student visa (whichever is earlier), provided you have paid an
              annual premium in your final year of study
            </li>
            <li>
              You being repatriated under this policy to your country of origin
            </li>
            <li>
              Withdrawing from your course of study and leaving New Zealand
            </li>
            <li>
              Any other date agreed upon by Studentsafe or notified to you in
              writing
            </li>
            <li>Whichever happens first</li>
          </ul>

          <p>
            Note: Returning students insured under this policy are covered
            between semesters of enrollment.
            <br />{" "}
            <a
              className="italic"
              href="https://www.aut.ac.nz/__data/assets/pdf_file/0005/337055/SFUB.5.Studensafe_Inbound_Uni_DL_AUT_-_Web.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              For more information, you can download the Studentsafe brochure
            </a>
            .{" "}
          </p>

          <h4>How to Be Reimbursed for Expenses on an Insurance Claim</h4>
          <p>
            You can fill in a Studentsafe claim form online.
            <br />{" "}
            <a
              className="italic"
              href="https://www.insurancesafenz.com/claimsportal"
              target="_blank"
              rel="noopener noreferrer"
            >
              To start an online insurance claim
            </a>
            .{" "}
          </p>

          <h4>Find out more about Studentsafe insurance</h4>
          <p>
            For more information about Studentsafe insurance, you can contact
            them using the following details:
          </p>
          <ul>
            <li>
              Phone: 0800 486 004 (Domestic) or +64 9 488 1638 (International)
            </li>
          </ul>
          <ul>
            <li>
              You can visit the{" "}
              <a
                className="italic"
                href="https://www.insurancesafenz.com/studentsafe/student-safe-inbound-university"
                target="_blank"
                rel="noopener noreferrer"
              >
                official Insurancesafe website
              </a>{" "}
              to access additional information
            </li>
          </ul>

          <ul>
            <li>
              <a
                className="italic"
                href="https://www.insurancesafenz.com/files/PDF/SFUB.6._Studentsafe_Inbound_Uni_(WEB)_AUT.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Studentsafe brochure
              </a>
            </li>
          </ul>
        </div>

        <div className="separateLine"></div>
        <div className="chapter-content-text">
          <h2 className="chapter-title">
            Arranging insurance through other approved insurance providers:
          </h2>
          <p>
            If you purchase an alternative insurance policy from a provider on
            the approved list, ensure that the insurance cover meets the
            following requirements:
          </p>
          <ul>
            <li>
              The insurance cover should be for the duration of your student
              visa.
            </li>
            <li>
              The insurance should cover your time studying in New Zealand, as
              well as your travel to and from the country.
            </li>
            <li>
              Proof of your alternative approved insurance policy (English
              translation only) must be provided by emailing
              studenthub@aut.ac.nz no later than the Friday before you start
              your study at AUT.
            </li>
          </ul>

          <h2>Approved Medical and Travel Insurance Providers:</h2>
          <ul>
            <li>InterGlobal – StudentCare Plan (NZ)</li>
            <li>Uni-Care Ltd (NZ) – NZ Student Plan</li>
            <li>
              Southern Cross International Student Travel Insurance - Type:
              Individual
            </li>
            <li>OrbitProtect – Prime Plan</li>
            <li>U.M. Association Limited (UK)</li>
            <li>AON Protect (UK)</li>
            <li>Swedish State (Sweden) – Student UT Plan</li>
            <li>Europeiske Norway</li>
            <li>Europeiske Reiseforsikring</li>
            <li>EUROPAEISCHE Reiseversicherungs AG</li>
            <li>Gouda Travel Insurance (Sweden)</li>
            <li>Gouda Reseforskring (CSN Insurance for Study Abroad)</li>
            <li>
              Gouda Reseforskring / Gouda Travel Insurance
              (Norway/Denmark/Sweden)
            </li>
            <li>ACE Europe</li>
            <li>Gjensidige Travel Insurance (Norway)</li>
            <li>ANSA (AIG) Student Insurance (Norway)</li>
            <li>BUPA Student Travel Insurance (Denmark)</li>
            <li>RUNA – (Denmark)</li>
            <li>ETU Forskring (Denmark)</li>
            <li>TRYG (Denmark)</li>
            <li>SafeAway (Denmark)</li>
            <li>EUROPEISKA –ERV</li>
            <li>AON Protect Student Insurance</li>
            <li>Allianz Reiseversicherung</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
