import React, { useState } from "react";
const DataProcess4 = ({ name, subChild, setIsSet3, setIsSet2 }) => {
  const [subName, setSubName] = useState("");
  const [isCheckChild, setIsCheckChild] = useState(false);
  const [isNameOne, setIsNameOne] = useState(false);
  const [isOname1, setOname1] = useState(false);
  return (
    <section>
      <div>
        <section className="child-section">
          <input
            type="checkbox"
            name={name}
            id="checkbox"
            checked={isCheckChild}
            value={name}
            onChange={(e) => {
              setSubName(e.target.name);
              setIsCheckChild(!isCheckChild);
            }}
          />
          <span>{name}</span>
        </section>
        {name === subName &&
          isCheckChild &&
          subChild.map((child) => {
            const { id, name1, Oname1, name2, Oname2 } = child;
            console.log("last", Oname1);
            return (
              <div key={id}>
                <section className="sub-section">
                  <div>
                    <div>
                      {name1 &&
                        (isOname1 ? (
                          <div>
                            <input
                              type="checkbox"
                              disabled
                              name={name1}
                              id={id}
                              checked={isNameOne}
                              value={name1}
                            />
                            <span>{name1}</span>
                          </div>
                        ) : (
                          <div>
                            <input
                              type="checkbox"
                              name={name1}
                              id={id}
                              checked={isNameOne}
                              value={name1}
                              onChange={(e) => {
                                setIsNameOne(!isNameOne);
                                setIsSet2({
                                  subName,
                                  subVersion: e.target.value,
                                });
                              }}
                            />
                            <span>{name1}</span>
                          </div>
                        ))}
                      {Oname1 &&
                        (isNameOne ? (
                          <div>
                            <input
                              type="checkbox"
                              disabled
                              name={Oname1}
                              id={id}
                              checked={isOname1}
                              value={Oname1}
                            />
                            <span>{Oname1}</span>
                          </div>
                        ) : (
                          <div>
                            <input
                              type="checkbox"
                              name={Oname1}
                              id={id}
                              checked={isOname1}
                              value={Oname1}
                              onChange={(e) => {
                                setOname1(!isOname1);
                                setIsSet2({
                                  subName,
                                  subVersion: e.target.value,
                                });
                              }}
                            />
                            <span>{Oname1}</span>
                          </div>
                        ))}
                      {name2 &&
                        (isOname1 ? (
                          <div>
                            <input
                              type="checkbox"
                              disabled
                              name={name2}
                              id={id}
                              checked={isNameOne}
                              value={name2}
                            />
                            <span>{name2}</span>
                          </div>
                        ) : (
                          <div>
                            <input
                              type="checkbox"
                              name={name2}
                              id={id}
                              checked={isNameOne}
                              value={name2}
                              onChange={(e) => {
                                setIsNameOne(!isNameOne);
                                setIsSet3({
                                  subName,
                                  subVersion: e.target.value,
                                });
                              }}
                            />
                            <span>{name2}</span>
                          </div>
                        ))}
                      {/* end of name2 */}
                      {Oname2 &&
                        (isNameOne ? (
                          <div>
                            <input
                              type="checkbox"
                              disabled
                              name={Oname2}
                              id={id}
                              checked={isOname1}
                              value={Oname2}
                            />
                            <span>{Oname2}</span>
                          </div>
                        ) : (
                          <div>
                            <input
                              type="checkbox"
                              name={Oname2}
                              id={id}
                              checked={isOname1}
                              value={Oname2}
                              onChange={(e) => {
                                setOname1(!isOname1);
                                setIsSet3({
                                  subName,
                                  subVersion: e.target.value,
                                });
                              }}
                            />
                            <span>{Oname2}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
      </div>
    </section>
  );
};
export default DataProcess4;
