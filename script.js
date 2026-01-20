function scrollToDemo() {
  document.getElementById("demo").scrollIntoView({ behavior: "smooth" });
}

// Karnataka districts with 3 visiting places + price
const samplePlans = {
  "Bagalkot": [
    { name: "Badami Caves", price: 50 },
    { name: "Pattadakal", price: 30 },
    { name: "Aihole", price: 20 }
  ],
  "Bengaluru Urban": [
    { name: "Lalbagh Botanical Garden", price: 40 },
    { name: "Cubbon Park", price: 0 },
    { name: "Bangalore Palace", price: 230 }
  ],
  "Bengaluru Rural": [
    { name: "Nandi Hills", price: 0 },
    { name: "Devanahalli Fort", price: 20 },
    { name: "Skandagiri Trek", price: 50 }
  ],
  "Belagavi": [
    { name: "Belagavi Fort", price: 10 },
    { name: "Kamal Basti", price: 0 },
    { name: "Gokak Falls", price: 30 }
  ],
  "Ballari": [
    { name: "Ballari Fort", price: 20 },
    { name: "Tungabhadra Dam", price: 0 },
    { name: "Hampi (Nearby)", price: 50 }
  ],
  "Bidar": [
    { name: "Bidar Fort", price: 10 },
    { name: "Bahmani Tombs", price: 0 },
    { name: "Guru Nanak Jhira", price: 0 }
  ],
  "Chamarajanagar": [
    { name: "BR Hills", price: 0 },
    { name: "MM Hills", price: 0 },
    { name: "Hogenakkal (Nearby)", price: 50 }
  ],
  "Chikkamagaluru": [
    { name: "Mullayanagiri", price: 0 },
    { name: "Baba Budangiri", price: 0 },
    { name: "Coffee Estate", price: 100 }
  ],
  "Chitradurga": [
    { name: "Chitradurga Fort", price: 30 },
    { name: "Chandravalli Caves", price: 20 },
    { name: "Hidimbeshwara Temple", price: 0 }
  ],
  "Dakshina Kannada": [
    { name: "Panambur Beach", price: 0 },
    { name: "St Aloysius Chapel", price: 0 },
    { name: "Pilikula Zoo", price: 150 }
  ],
  "Davanagere": [
    { name: "Kunduvada Kere", price: 0 },
    { name: "Anjaneya Temple", price: 0 },
    { name: "Harihara", price: 0 }
  ],
  "Dharwad": [
    { name: "Unkal Lake", price: 0 },
    { name: "Nrupatunga Betta", price: 0 },
    { name: "Glass House", price: 30 }
  ],
  "Gadag": [
    { name: "Trikuteshwara Temple", price: 0 },
    { name: "Lakkundi", price: 10 },
    { name: "Veeranarayana Temple", price: 0 }
  ],
  "Hassan": [
    { name: "Belur", price: 10 },
    { name: "Halebidu", price: 20 },
    { name: "Shravanabelagola", price: 0 }
  ],
  "Haveri": [
    { name: "Ranebennur Sanctuary", price: 50 },
    { name: "Hangal", price: 10 },
    { name: "Bankapura Peacock Sanctuary", price: 30 }
  ],
  "Kalaburagi": [
    { name: "Gulbarga Fort", price: 10 },
    { name: "Bande Nawaz Dargah", price: 0 },
    { name: "Sharana Basaveshwara Temple", price: 0 }
  ],
  "Kodagu": [
    { name: "Abbey Falls", price: 30 },
    { name: "Talakaveri", price: 0 },
    { name: "Madikeri Fort", price: 20 }
  ],
  "Kolar": [
    { name: "Antharagange", price: 0 },
    { name: "Someshwara Temple", price: 0 },
    { name: "KGF", price: 50 }
  ],
  "Mandya": [
    { name: "KRS Dam", price: 0 },
    { name: "Ranganathittu", price: 50 },
    { name: "Srirangapatna", price: 20 }
  ],
  "Mysuru": [
    { name: "Mysore Palace", price: 70 },
    { name: "Chamundi Hill", price: 0 },
    { name: "Mysore Zoo", price: 200 }
  ],
  "Raichur": [
    { name: "Raichur Fort", price: 10 },
    { name: "Mantralayam", price: 0 },
    { name: "Maski", price: 20 }
  ],
  "Ramanagara": [
    { name: "Ramadevara Betta", price: 0 },
    { name: "Janapada Loka", price: 20 },
    { name: "Rock Climbing", price: 50 }
  ],
  "Shivamogga": [
    { name: "Jog Falls", price: 50 },
    { name: "Sakrebailu Camp", price: 30 },
    { name: "Sharavathi View", price: 0 }
  ],
  "Tumakuru": [
    { name: "Devarayanadurga", price: 0 },
    { name: "Siddara Betta", price: 0 },
    { name: "Shivagange", price: 20 }
  ],
  "Udupi": [
    { name: "Krishna Temple", price: 0 },
    { name: "Malpe Beach", price: 0 },
    { name: "St Mary’s Island", price: 20 }
  ],
  "Uttara Kannada": [
    { name: "Karwar Beach", price: 0 },
    { name: "Dandeli", price: 50 },
    { name: "Kali River", price: 0 }
  ],
  "Vijayapura": [
    { name: "Gol Gumbaz", price: 20 },
    { name: "Ibrahim Rauza", price: 10 },
    { name: "Bara Kaman", price: 0 }
  ],
  "Yadgir": [
    { name: "Yadgir Fort", price: 10 },
    { name: "Baichabal Temple", price: 0 },
    { name: "Devapura Lake", price: 0 }
  ]
};

// Populate district dropdown
const districtSelect = document.getElementById("district");
Object.keys(samplePlans).forEach(d => {
  const option = document.createElement("option");
  option.value = d;
  option.textContent = d;
  districtSelect.appendChild(option);
});

function generatePlan() {
  const district = districtSelect.value;
  const days = document.getElementById("days").value;
  const budget = document.getElementById("budget").value;

  if (!district || !days || !budget) {
    alert("Please select all fields");
    return;
  }

  const output = document.getElementById("output");
  const places = samplePlans[district];

  let html = `
    <h3>${district} Trip Plan</h3>
    <p><strong>Days:</strong> ${days} | <strong>Budget:</strong> ${budget}</p>

    <iframe 
      src="https://www.google.com/maps?q=${encodeURIComponent(district)}&output=embed"
      width="100%" 
      height="250" 
      style="border:0; border-radius:10px; margin:15px 0;"
      loading="lazy">
    </iframe>

    <hr>
  `;

  places.forEach(p => {
    html += `
      <div class="place-card">
        <strong>${p.name}</strong>
        <p>Entry Fee: ₹${p.price}</p>
      </div>
    `;
  });

  html += `<small>*Demo data for preview only</small>`;
  output.innerHTML = html;
}
