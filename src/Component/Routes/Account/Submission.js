import { useState, useEffect } from "react";
import NavigationBar from "../../Atoms/NavgationBar";
import socialImage from "../../../Assets/Img/socialmedia1.png";
const Submission = () => {
  const [activeTab, setActiveTab] = useState("PIB");
  const [activeTable, setActiveTable] = useState();

  function handleActiveTAb(value) {
    setActiveTab(value);
    if (value === "PIB") {
      setActiveTable(PIB);
    } else if (value === "Tbill") {
      setActiveTable(Tbill);
    } else if (value === "Quaterly") {
      setActiveTable(Quaterly);
    } else if (value === "semiAnual") {
      setActiveTable(semiAnual);
    } else if (value === "annual") {
      setActiveTable(annual);
    }
    console.log("========asdadad>", activeTable);
  }

  const Quaterly = {
    headings: [
      "Start of When-Issue Period ",
      "Auction Date",
      "Settlement Date",
    ],
    tBody: [
      {
        id: 1,
        items: ["14-May-22", "  18-May-22", " 19-May-22"],
      },
      {
        id: 3,
        items: ["28-May-22", " 1-Jun-22", " 2-Jun-22"],
      },

      {
        id: 4,
        items: ["11-Jun-22", " 15-Jun-22", " 16-Jun-22"],
      },
      {
        id: 5,
        items: ["25-Jun-22", "  29-Jun-22", " 30-Jun-22"],
      },
      {
        id: 6,
        items: ["6-Jul-22", " 13-Jul-22", " 14-Jul-22"],
      },
      {
        id: 7,
        items: ["23-Jul-22", " 27-Jul-22", " 28-Jul-22"],
      },
    ],
  };
  const semiAnual = {
    headings: [
      "Start of When-Issue Period ",
      "Auction Date",
      "Settlement Date",
    ],
    tBody: [
      {
        id: 1,
        items: ["13-May-22", "  18-May-22", " 19-May-22"],
      },
      {
        id: 3,
        items: ["27-May-22", " 1-Jun-22", " 2-Jun-22"],
      },

      {
        id: 4,
        items: ["10-Jun-22", " 15-Jun-22", " 16-Jun-22"],
      },
      {
        id: 5,
        items: ["24-Jun-22", "  29-Jun-22", " 30-Jun-22"],
      },
      {
        id: 6,
        items: ["7-Jul-22", " 13-Jul-22", " 14-Jul-22"],
      },
      {
        id: 7,
        items: ["22-Jul-22", " 27-Jul-22", " 28-Jul-22"],
      },
    ],
  };

  const PIB = {
    headings: [
      "Instrument",
      "Bidding Deadline",
      "Auction Date",
      "Settlement Date",
    ],
    tBody: [
      // {
      //   id: 1,
      //   items: ["PIB", "18-May-22", " 25-May-22", " 26-May-22"],
      // },
      {
        id: 2,
        items: ["PIB", "15-Jun-22", "22-Jun-22", "23-Jun-22"],
      },
      {
        id: 3,
        items: ["PIB", "13-Jul-22", "20-Jul-22", " 21-Jul-22"],
      },
      // {
      //   id: 4,
      //   items: ["PIB", "14 Jun 2022 | 4:00 PM", "19-Jun-22", "30-Jun-22"],
      // },
      // {
      //   id: 5,
      //   items: ["24 Jul 2022","23 Jul 2022","13-Jul-22", "10-Jul-22"],
      // },
      // {
      //   id: 6,
      //   items: ["27-Jul-22", "28-Jul-22"],
      // },
    ],
  };
  // {
  //   headings: [
  //     "Start of When-Issue Period ",
  //     "Auction Date",
  //     "Settlement Date",
  //   ],
  //   tBody: [
  //     {
  //       id: 1,
  //       items: ["18-May-22", " 25-May-22", " 26-May-22"],
  //     },
  //     {
  //       id: 2,
  //       items: ["15-Jun-22", " 22-Jun-22", " 23-Jun-22"],
  //     },
  //     {
  //       id: 3,
  //       items: ["13-Jul-22", " 20-Jul-22", " 21-Jul-22"],
  //     },
  //   ],
  // };

  const annual = {
    headings: [
      "Start of When-Issue Period ",
      "Auction Date",
      "Settlement Date",
    ],
    tBody: [
      {
        id: 1,
        items: ["18-May-22", " 25-May-22", " 26-May-22"],
      },
      {
        id: 2,
        items: ["15-Jun-22", " 22-Jun-22", " 23-Jun-22"],
      },
      {
        id: 3,
        items: ["13-Jul-22", " 20-Jul-22", " 21-Jul-22"],
      },
    ],
  };
  const Tbill = {
    headings: [
      "Instrument",
      "Auction Date",
      "Settlement Date",
    ],
    tBody: [
      // {
      //   id: 1,
      //   items: ["T-BILL", "18-May-22", "19-May-22"],
      // },
      {
        id: 2,
        items: ["T-BILL", "1-Jun-22", "2-Jun-22"],
      },
      {
        id: 3,
        items: ["T-BILL", "15-Jun-22", "16-Jun-22"],
      },
      {
        id: 4,
        items: ["T-BILL", "29-Jun-22", "30-Jun-22"],
      },
      {
        id: 5,
        items: ["T-BILL", "13-Jul-22", "14-Jul-22"],
      },
      {
        id: 6,
        items: ["T-BILL","27-Jul-22", "28-Jul-22"],
      },
    ],
  };
  useEffect(() => {
    setActiveTable(PIB);
  }, []);

  console.log(Tbill.headings);
  const activeclass = "tabActive";
  return (
    <>
      <NavigationBar step={0} />
      <div>
        <div className="container-fluid account_main">
          <div className="row  accountdiv">
            <div className="col-lg-6 col-sm-4 col-md-4">
              <h2>Welcome Mr .John Doe</h2>
              <p className="acntp">Make your Account</p>
              <button className="btn btn-primary accountbtn">
              Open IPS Account
              </button>
            </div>
            <div className="col-6">
              <div className="d-flex justify-content-end">
                <img className="imageticks"  src={socialImage}/>
                {/* <p className="acntp">You are almost there</p> */}
                {/* <div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
      <span class="sr-only"></span>
    </div>
  </div>    */}
              </div>
            </div>
          </div>

          <div className="row   calendardiv ">
            <div className="col-lg-6  col-sm-6 col-md-6">
              <h2 className="my-3">Calendar</h2>
              <div className="calendarTab">
                <div className=" tabs_div">
                  <button
                    onClick={() => handleActiveTAb("PIB")}
                    className={`btn btn-primary my-2 ${
                      activeTab === "PIB" ? activeclass : "tabsbtn"
                    } my-3 me-3 `}
                  >
                    PIB
                  </button>
                  <button
                    onClick={() => handleActiveTAb("Tbill")}
                    className={`btn btn-primary  my-2  ${
                      activeTab === "Tbill" ? activeclass : "tabsbtn"
                    }  me-3 `}
                  >
                    T-BILL
                  </button>
                  <button
                    // onClick={() => handleActiveTAb("")}
                    className={`btn btn-primary    ${
                      activeTab === "skuk" ? activeclass : "tabsbtn"
                    }  my-2  me-3 sukook `}
                  >
                    SUKUK (Coming Soon)
                  </button>
                </div>
                <div className=" tabs_div">
                  <p className="ms-1 my-3 fw-600 acntp">
                    <a href="">Click Here</a> to review last auction
                    results
                  </p>
                  {/* <button
                    onClick={() => handleActiveTAb("annual")}
                    className={`btn btn-primary   ${
                      activeTab === "annual" ? activeclass : "tabsbtn"
                    }  my-2  mx-3 `}
                  >
                    Annual
                  </button>
                  <button
                    onClick={() => handleActiveTAb("semiAnual")}
                    className={`btn btn-primary  my-2    ${
                      activeTab === "semiAnual" ? activeclass : "tabsbtn"
                    }  `}
                  >
                    Semi Annual
                  </button>
                  <button
                    onClick={() => handleActiveTAb("Quaterly")}
                    className={`btn btn-primary   my-2   ${
                      activeTab === "Quaterly" ? activeclass : "tabsbtn"
                    } mx-3 `}
                  >
                    Quaterly
                  </button> */}
                </div>
              </div>

              <table class="table calendarTable table-bordered">
                <thead class="table_head">
                  <tr className="calendarT_header text-center">
                    {activeTable?.headings?.map((data) => {
                      return <th>{data}</th>;
                    })}
                    <th>Remind me</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTable?.tBody?.map((item) => (
                    <tr className="second_row text-center">
                      {item.items?.map((data) => (
                        <td  key={item}>{data}</td>
                      ))}
                      <td className="">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-sm-6 col-md-6">
              <h2 className="my-3">Guidelines</h2>
              {/* <ul className="me-4">
                <li className="calendar_li my-4 fw-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </li>
                <li className="calendar_li my-4 fw-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et
                </li>
                <li className="calendar_li my-4 fw-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </li>
                <li className="calendar_li my-4 fw-600">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et
                </li>
                <li className="calendar_li my-4 fw-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et
                </li>
                <li className="calendar_li my-4 fw-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et
                </li>
              </ul> */}
             
              <div  data-spy="scroll" class="accordion scroll_y acoordian " id="style-1" >
              <div class="accordion-item my-2 accordian_item">
    <h2 class="accordion-header border_top " id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
      What is an IPS Account?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse accordionBody" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item my-2 accordian_item">
    <h2 class="accordion-header border_top " id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What entities are Primary Dealers?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse accordionBody" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item my-2 accordian_item">
    <h2 class="accordion-header border_top " id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How do I open an IPS Account?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse accordionBody" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item my-2 accordian_item">
    <h2 class="accordion-header border_top " id="headingfour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
      Who can open an IPS Account?
      </button>
    </h2>
    <div id="collapsefour" class="accordion-collapse collapse accordionBody" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item my-2 accordian_item">
    <h2 class="accordion-header border_top " id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What are Market Treasury Bills?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse accordionBody" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div> 
  <div class="accordion-item my-2 accordian_item">
    <h2 class="accordion-header border_top " id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What are Pakistan Investment Bonds (PIB)?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse accordionBody" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item my-2 accordian_item">
    <h2 class="accordion-header border_top " id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse accordionBody" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item my-2 accordian_item">
    <h2 class="accordion-header border_top " id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse accordionBody" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submission;
