import { Button } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="Footer_1">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "8vw",
            }}
          >
            <ul>
              <li>
                <Button variant="text" color="default">
                  Clients
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  About
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  News
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  Contact
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  Careers
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  Press
                </Button>{" "}
              </li>
            </ul>
          </div>
          <ul>
            <li>
              <Button variant="text" color="default">
                San Fransicso
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                New York
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                Tokyo
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                Los Angeles
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                Osaka
              </Button>{" "}
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "8vw",
            }}
          ></div>
          <ul>
            <li>
              <Button variant="text" color="default">
                Newsletter
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                Blog
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                Bueno.co
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                Ueno.store
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                Ueno.design
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                Ueno.land
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                Playground
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                The Interview
              </Button>{" "}
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "8vw",
            }}
          ></div>
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="Footer_3"
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginLeft: "2vw", width: "70vw" }}>
            <hr style={{ opacity: ".5", height: ".1px" }} />
          </div>

          <div style={{ marginLeft: "2vw", width: "100%" }}>
            <strong style={{ fontSize: "1.8rem" }}>ueno.</strong>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            position: "relative",
            left: "-10vw",
            top: "7vh",
          }}
        >
          <li>
            <svg viewBox="0 0 18 18" width="18" height="18">
              <path
                fill="currentColor"
                fill-rule="nonzero"
                d="M5.2 0h7.6C15.7 0 18 2.3 18 5.2v7.6c0 2.9-2.3 5.2-5.2 5.2H5.2A5.2 5.2 0 010 12.8V5.2C0 2.3 2.3 0 5.2 0zM5 1.8A3.2 3.2 0 001.8 5v8c0 1.8 1.4 3.2 3.2 3.2h8c1.7 0 3.2-1.5 3.2-3.2V5c0-1.8-1.4-3.2-3.2-3.2H5zm8.7 1.3a1.1 1.1 0 110 2.3 1.1 1.1 0 010-2.3zM9 4.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.8a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4z"
              ></path>
            </svg>
          </li>
          <li>
            <svg width="18" height="17" viewBox="0 0 18 17">
              <path
                fill="currentColor"
                d="M8.7 0A8.7 8.7 0 006 17c.4 0 .5-.2.5-.4V15c-2.4.5-2.9-1.2-2.9-1.2-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9 0 1.3 1 1.3 1 .8 1.2 2 .8 2.6.6 0-.5.3-1 .5-1.1-2-.3-4-1-4-4.3 0-1 .4-1.8 1-2.4-.1-.2-.4-1.1 0-2.3 0 0 .8-.2 2.4.9a8.2 8.2 0 014.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1 0 2.3.6.6 1 1.4 1 2.4 0 3.3-2 4-4 4.3.3.2.6.8.6 1.6v2.4c0 .2.1.5.6.4A8.7 8.7 0 008.7 0z"
              ></path>
            </svg>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 18 18">
              <title>LinkedIn icon</title>
              <path
                fill="currentColor"
                d="M18 18h-4v-6.75c0-1.06-1.19-1.94-2.25-1.94S10 10.19 10 11.25V18H6V6h4v2c.66-1.07 2.36-1.76 3.5-1.76 2.5 0 4.5 2.04 4.5 4.51V18zM4 18H0V6h4v12zM2 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
              ></path>
            </svg>
          </li>
          <li>
            <svg width="9" height="18" viewBox="0 0 9 18">
              <path
                fill="currentColor"
                d="M9 0v3.6H7.2c-.6 0-.9.7-.9 1.4v2.2H9v3.6H6.3V18H2.7v-7.2H0V7.2h2.7V3.6c0-2 1.6-3.6 3.6-3.6H9z"
              ></path>
            </svg>
          </li>
        </div>
      </div>
    </>
  );
};
//     </div>
//   );
// };

export default Footer;
