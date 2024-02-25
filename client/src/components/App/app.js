import styles from "../Login/styles.module.css";
import React from 'react';
import ImageUpload from '../Home/home.js'; // Update the path accordingly

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      
      {/* Add the ImageUpload component here */}
      <ImageUpload />
    </div>
  );
};

export default Main;























// const Main = () => {
// 	const handleLogout = () => {
// 		localStorage.removeItem("token");
// 		window.location.reload();
// 	};

// 	return (
// 		<div className={styles.main_container}>
// 			<nav className={styles.navbar}>
// 				<h1>fakebook</h1>
// 				<button className={styles.white_btn} onClick={handleLogout}>
// 					Logout
// 				</button>
// 			</nav>
// 		</div>
// 	);
// };

// export default Main;
