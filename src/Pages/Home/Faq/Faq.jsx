import FAQ from '../../../assets/images/FAQ.jpg'
const Faq = () => {
  return (
    <div id='faq' className="my-32 space-y-11">
        <h1 className="lg:text-5xl md:text-5xl text-3xl text-center font-bold">Frequently Ask Questions</h1>
        <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={FAQ}
      className='lg:max-w-lg md:max-w-lg sm:max-w-sm max-w-xs'
       />
    <div className='space-y-4'>
    <div className="collapse collapse-plus bg-gray-200  ">
        <input type="checkbox" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How do I create an assignment on the platform?
        </div>
        <div className="collapse-content">
          <p>
            Creating an assignment is simple! After logging into your account,
            navigate to the &quot;Assignments&quot; section and click on the
            &quot;Create New Assignment&quot; button. Fill in the required details
            such as the assignment title, description, deadline, and any
            relevant materials. Once you’re done, click &quot;Submit&quot; to create
            the assignment. Your friends will be able to see and access it.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-gray-200 ">
        <input type="checkbox" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How can I join a study group session?
        </div>
        <div className="collapse-content">
          <p>
            To join a study group session, go to the &quot;Study Groups&quot; section
            from your dashboard. Browse through the available groups or use the
            search function to find a specific group by subject or topic. Once
            you find a group that interests you, click on it and then select
            &quot;Join Group.&quot; You can participate in live sessions, share
            resources, and collaborate with other members of the group.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-gray-200 ">
        <input type="checkbox" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How do I grade my friend&apos;s assignments?
        </div>
        <div className="collapse-content">
          <p>
            Grading your friends assignments is easy and collaborative! After
            an assignment&apos;s submission deadline has passed, navigate to the
            &quot;Assignments&quot; section and select the assignment you wish to grade.
            Click on the &quot;Grade Assignment&quot; button next to your friend&apos;s
            submission. You’ll be able to view their work, provide comments, and
            assign a grade. Once you’re satisfied with your evaluation, click
            &quot;Submit Grade&quot; to finalize it. Feel free to let me know if you need
            more FAQs or further assistance!
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      
    </div>
  );
};

export default Faq;
