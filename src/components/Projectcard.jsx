const ProjectCard = ({
  imgUrl,
  title,
  description,
  href1,
  href2,
}) => {
  return (
    <div className="flex bg-white-300 shadow-2xl rounded-2xl">
    <div className="flex flex-col justify-between p-1 h-[355px] w-[355px] rounded-3xl">
      <div className="flex-1">
        <img src={imgUrl} alt="" className="rounded-[20px] h-full w-full " />
      </div>



      <div className="flex flex-col gap-1 flex-2 p-2 ">
        <h2 className="text-md text-black font-bold ">
          {title}
        </h2>
        <h4 className="text-sm text-black  ">
          {description}
          </h4>
        
      </div>


      <div className="flex items-center flex-2 p-2">
        <div className="flex  w-screen justify-around gap-2">
          <a
            href={href1}
            className="   text-black p-1 "
            target="blank"
          >
            Code
          </a>
          <a
            href={href2}
            className="  text-black "
            target="blank"
          >
            View
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProjectCard;
