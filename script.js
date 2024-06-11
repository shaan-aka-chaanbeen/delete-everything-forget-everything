// // Function to fetch the list of essays from the server
// async function fetchEssayList() {
//     try {
//         const response = await fetch('essays/');
//         const data = await response.text();
//         const essayList = data.split('\n').filter(Boolean);
//         return essayList;
//     } catch (error) {
//         console.error('Error fetching essay list:', error);
//         return [];
//     }
// }

// // Function to populate the essay index
// async function populateEssayIndex() {
//     const essayListContainer = document.querySelector('.essay-list');
//     const essayList = await fetchEssayList();
//     essayList.forEach((essay, index) => {
//         const listItem = document.createElement('a');
//         listItem.textContent = essay;
//         listItem.href = `essays/${essay}`;
//         essayListContainer.appendChild(listItem);
//     });
// }

// // Populate the essay index on page load
// document.addEventListener('DOMContentLoaded', () => {
//     populateEssayIndex();
// });
