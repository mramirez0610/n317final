"use client";
import { useState, useEffect } from "react";
import { useForm } from "@/context/FormContext";
import styles from "@/styles/form.module.scss";
import Hero from "@/components/hero";

export default function NewRoute() {
  const [newRoute, setNewRoute] = useState({
    climbName: "",
    difficulty: "",
    notes: "",
    climbType: "Bouldering",
    subType: "",
    slug: "", // Added slug to the state
  });
  const [routes, setRoutes] = useState([]);
  const { saveFormData } = useForm();

  useEffect(() => {
    const savedRoutes = JSON.parse(localStorage.getItem("routes")) || [];
    setRoutes(savedRoutes);
  }, []);

  /* 
  full disclosure, i searched this up. i had no idea how to generate a url-friendly slug.
  */

  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const handleClimbNameChange = (e) => {
    const climbName = e.target.value;
    setNewRoute({ ...newRoute, climbName, slug: generateSlug(climbName) });
  };

  const submit = (e) => {
    e.preventDefault();
    const updatedRoutes = [...routes, newRoute];
    setRoutes(updatedRoutes);
    localStorage.setItem("routes", JSON.stringify(updatedRoutes));
    saveFormData(newRoute);
    console.log("data saved: ", newRoute);
  };

  const handleClimbTypeChange = (e) => {
    setNewRoute({ ...newRoute, climbType: e.target.value, subType: "" });
  };

  const handleSubTypeChange = (e) => {
    setNewRoute({ ...newRoute, subType: e.target.value });
  };

  const subTypeOptions =
    newRoute.climbType === "Bouldering"
      ? [
          "V0",
          "V1",
          "V2",
          "V3",
          "V4",
          "V5",
          "V6",
          "V7",
          "V8",
          "V9",
          "V10",
          "V11",
          "V12",
          "V13",
          "V14",
          "V15",
          "V16",
          "V17",
        ]
      : [
          "5.5",
          "5.6",
          "5.7",
          "5.8",
          "5.9",
          "5.10-",
          "5.10",
          "5.10+",
          "5.11-",
          "5.11",
          "5.11+",
          "5.12-",
          "5.12",
          "5.12+",
          "5.13-",
          "5.13",
          "5.13+",
          "5.14-",
          "5.14",
          "5.14+",
        ];

  return (
    <div className={styles.formContainer}>
      <Hero imageSrc="/img/img1.jpeg" alt="New route hero image" />
      <form className={styles.form} onSubmit={submit}>
        <label htmlFor="climbName">Climb Name:</label>
        <input
          id="climbName"
          className={styles.input}
          type="text"
          name="climbName"
          value={newRoute.climbName}
          onChange={handleClimbNameChange}
        />
        <div className={styles.inlineFields}>
          <div className={styles.field}>
            <label htmlFor="climbType">Climb Type:</label>
            <select
              id="climbType"
              className={styles.select}
              name="climbType"
              value={newRoute.climbType}
              onChange={handleClimbTypeChange}
            >
              <option value="Bouldering">Bouldering</option>
              <option value="Top Rope">Top Rope</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="subType">Grade:</label>
            <select
              id="subType"
              className={styles.select}
              name="subType"
              value={newRoute.subType}
              onChange={handleSubTypeChange}
            >
              {subTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <label htmlFor="notes">Notes:</label>
        <br />
        <label htmlFor="example" className={styles.example}>
          (How did the climb feel? Was it reachy? Did you cruise it? How many
          times did you fall? Take all these things into account when writing
          your notes.)
        </label>
        <textarea
          id="notes"
          className={styles.textarea}
          name="notes"
          value={newRoute.notes}
          onChange={(e) => {
            setNewRoute({ ...newRoute, notes: e.target.value });
          }}
        />
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
