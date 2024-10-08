import { BsGripVertical } from 'react-icons/bs';
import GreenCheckmark from '../Modules/GreenCheckmark';
import { CiSearch } from "react-icons/ci";
import { PiNotePencilDuotone } from "react-icons/pi";
import { RxTriangleDown } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from 'react-icons/io5';


export default function Assignments() {
  return (
    <div id="wd-assignments">

      <div className="input-group mb-3">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex">
            <input
              id="wd-search-assignment"
              className="form-control border-start-0 rounded"
              placeholder="Search..."
              style={{ textAlign: "left", width: "300px" }}
            />
            <span
              className="input-group-text bg-white border-end-0 rounded"
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <CiSearch
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "30%",
                  zIndex: 10,
                }}
              />
            </span>
          </div>


          <div className="d-flex ms-auto">
            <button id="wd-add-assignment-group" className="btn btn-secondary d-flex align-items-center ms-2">
              <FaPlus className="me-1" /> Group
            </button>
            <button id="wd-add-assignment" className="btn btn-primary-red d-flex align-items-center ms-2">
              <FaPlus className="me-1" /> Assignment
            </button>
          </div>
        </div>
      </div>


      <ul className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

        <li className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3 align-items-center"
            style={{ marginLeft: "5px" }} />
          <RxTriangleDown className="me-2 fs-3 align-items-center" />
          <strong>ASSIGNMENTS</strong>
          <div className="d-flex ms-auto align-items-center">
            <button className="btn btn-outline-dark" style={{ marginRight: "15px", borderRadius: "50px" }}>
              40% of Total</button>
            <FaPlus className="fs-4 align-items-center" style={{ marginRight: "15px" }} />
            <IoEllipsisVertical className="fs-4 align-items-center" />
          </div>
        </li>


        <ul id="wd-assignment-list" className="p-0 m-0 list-group rounded-0">

          <li className="wd-assignment-list-item list-group-item p-3 ps-2 d-flex justify-content-between align-items-start">
            <div className="d-flex align-items-start">
              <BsGripVertical className="me-2 fs-3 align-self-center" />
              <PiNotePencilDuotone className="me-2 fs-3 align-self-center" style={{ color: "green" }} />

              <div className="d-flex flex-column me-2">
                <a className="wd-assignment-link d-flex align-items-center"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                  style={{ color: "inherit", textDecoration: "none", paddingLeft: "20px" }}>
                  <strong>A1</strong>
                </a>
                <div style={{ color: "inherit", textDecoration: "none", paddingLeft: "20px" }}>
                  <span style={{ color: "rgb(225, 5, 5)" }}>Multiple Modules</span> | Not available until May 6 at 12:00 am |
                  <br /> Due May 13 at 11:59pm | 100 pts
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center" style={{ paddingTop: "2.5%" }}>
              <span className="d-flex align-items-center me-2">
                <GreenCheckmark />
              </span>
              <IoEllipsisVertical className="fs-4 align-self-center" />
            </div>
          </li>



          <li className="wd-assignment-list-item list-group-item p-3 ps-2 d-flex justify-content-between align-items-start">
            <div className="d-flex align-items-start">
              <BsGripVertical className="me-2 fs-3 align-self-center" />
              <PiNotePencilDuotone className="me-2 fs-3 align-self-center" style={{ color: "green" }} />

              <div className="d-flex flex-column me-2">
                <a className="wd-assignment-link d-flex align-items-center"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                  style={{ color: "inherit", textDecoration: "none", paddingLeft: "20px" }}>
                  <strong>A2</strong>
                </a>
                <div style={{ color: "inherit", textDecoration: "none", paddingLeft: "20px" }}>
                  <span style={{ color: "rgb(225, 5, 5)" }}>Multiple Modules</span> | Not available until May 13 at 12:00 am |
                  <br /> Due May 20 at 11:59pm | 100 pts
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center" style={{ paddingTop: "2.5%" }}>
              <span className="d-flex align-items-center me-2">
                <GreenCheckmark />
              </span>
              <IoEllipsisVertical className="fs-4 align-self-center" />
            </div>
          </li>



          <li className="wd-assignment-list-item list-group-item p-3 ps-2 d-flex justify-content-between align-items-start">
            <div className="d-flex align-items-start">
              <BsGripVertical className="me-2 fs-3 align-self-center" />
              <PiNotePencilDuotone className="me-2 fs-3 align-self-center" style={{ color: "green" }} />

              <div className="d-flex flex-column me-2">
                <a className="wd-assignment-link d-flex align-items-center"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                  style={{ color: "inherit", textDecoration: "none", paddingLeft: "20px" }}>
                  <strong>A3</strong>
                </a>
                <div style={{ color: "inherit", textDecoration: "none", paddingLeft: "20px" }}>
                  <span style={{ color: "rgb(225, 5, 5)" }}>Multiple Modules</span> | Not available until May 20 at 12:00 am |
                  <br /> Due May 27 at 11:59pm | 100 pts
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center" style={{ paddingTop: "2.5%" }}>
              <span className="d-flex align-items-center me-2">
                <GreenCheckmark />
              </span>
              <IoEllipsisVertical className="fs-4 align-self-center" />
            </div>
          </li>

        </ul>
      </ul>




    </div>
  );
}

