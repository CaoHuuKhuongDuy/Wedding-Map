// Function to create a table with chairs
function createTable(container, tableId, chairCount, top, left) {
    const tableContainer = document.getElementById(container);
  
    const table = document.createElement('div');
    table.className = 'table';
    table.id = tableId;
    table.style.top = `${top}px`; // Set the top position
    table.style.left = `${left}px`; // Set the left position
  
    table.addEventListener('click', function() {
      openModal(tableId);
    });
  
    tableContainer.appendChild(table);
  
    // Use setTimeout to delay the calculation slightly
    setTimeout(function() {
        const radius = table.offsetWidth / 2;
        console.log(radius);
        
        for (let i = 0; i < chairCount; i++) {
          const angle = (i / chairCount) * 2 * Math.PI;
          const chair = document.createElement('div');
          chair.className = 'chair';
          chair.style.top = `${65 - (radius + 15) * Math.sin(angle)}px`;
          chair.style.left = `${65 + (radius + 15) * Math.cos(angle)}px`;
          table.appendChild(chair);
        }
      }, 0);
  }
  
  // Function to open the information modal
  function openModal(tableId) {
    const infoModal = document.getElementById('infoModal');
    currentTable = tableId;
    infoModal.style.display = 'flex';
  }
  
  // Function to close the information modal
  function closeModal() {
    const infoModal = document.getElementById('infoModal');
    infoModal.style.display = 'none';
  }
  
  window.onclick = function(event) {
    const infoModal = document.getElementById('infoModal');
    if (event.target === infoModal) {
      closeModal();
    }
  };
  
  // Function to adjust the number of passengers
  function adjustPassengers(count) {
    if (currentTable) {
      const table = document.getElementById(currentTable);
      const chairs = table.querySelectorAll('.chair');
      const currentPassengerCount = Array.from(chairs).filter(chair => chair.style.backgroundColor === 'red').length;
  
      if (currentPassengerCount + count >= 0 && currentPassengerCount + count <= chairs.length) {
        chairs.forEach((chair, index) => {
          if (index < currentPassengerCount + count) {
            chair.style.backgroundColor = 'red';
          } else {
            chair.style.backgroundColor = 'grey';
          }
        });
      }
    }
  }
  
  // Create three tables with different chair counts and positions
  createTable('tableContainer', 'table1', 10, 50, 50);
  createTable('tableContainer', 'table2', 10, 50, 150);
  createTable('tableContainer', 'table3', 10, 50, 250);
  