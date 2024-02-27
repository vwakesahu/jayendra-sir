pragma solidity ^0.8.0;

contract HospitalManagement {
  struct Patient {
    string id;
    string[14] data;
  }

  struct Doctor {
    string doctorId;
    string[10] data;
  }

  struct Pharmacy {
    uint256 id;
    string drugName;
    uint256 quantity;
    address adminAddress; // Add admin address field
  }

  struct Admin {
    string adminId;
    string adminName;
  }

  mapping(string => Patient) public patients;
  mapping(string => Doctor) public doctors;
  mapping(address => Admin) public admins;
  mapping(uint256 => Pharmacy) public pharmacyStocks;

  uint256 public pharmacyIdCounter;

  event PatientAdded(string id);
  event PatientDeleted(string id);
  event DoctorAdded(string doctorId);
  event DoctorDeleted(string doctorId);
  event AdminAdded(address adminAddress, string adminId);
  event PharmacyAdded(uint256 id);

  modifier onlyAdmin() {
    require(
      bytes(admins[msg.sender].adminId).length > 0,
      "Only admin can perform this operation"
    );
    _;
  }

  function addPatient(string memory _id, string[14] memory _data) public {
    Patient memory newPatient = Patient({ id: _id, data: _data });
    patients[_id] = newPatient;
    emit PatientAdded(_id);
  }

  function deletePatient(string memory _id) public onlyAdmin {
    delete patients[_id];
    emit PatientDeleted(_id);
  }

  function addDoctor(string memory _doctorId, string[10] memory _data) public {
    Doctor memory newDoctor = Doctor({ doctorId: _doctorId, data: _data });
    doctors[_doctorId] = newDoctor;
    emit DoctorAdded(_doctorId);
  }

  function deleteDoctor(string memory _doctorId) public onlyAdmin {
    delete doctors[_doctorId];
    emit DoctorDeleted(_doctorId);
  }

  function addAdmin(
    address _adminAddress,
    string memory _adminId,
    string memory _adminName
  ) public {
    Admin memory newAdmin = Admin({ adminId: _adminId, adminName: _adminName });
    admins[_adminAddress] = newAdmin;
    emit AdminAdded(_adminAddress, _adminId);
  }

  function addPharmacyStock(
    string memory _drugName,
    uint256 _quantity,
    address _adminAddress // Pass admin address as an argument
  ) public onlyAdmin {
    pharmacyIdCounter++;
    Pharmacy memory newPharmacyStock = Pharmacy({
      id: pharmacyIdCounter,
      drugName: _drugName,
      quantity: _quantity,
      adminAddress: _adminAddress // Assign admin address
    });
    pharmacyStocks[pharmacyIdCounter] = newPharmacyStock;
    emit PharmacyAdded(pharmacyIdCounter);
  }

  // View function to get patient details by ID
  function getPatient(string memory _id)
    public
    view
    returns (string memory, string[14] memory)
  {
    Patient memory patient = patients[_id];
    return (patient.id, patient.data);
  }

  // View function to get doctor details by ID
  function getDoctor(string memory _doctorId)
    public
    view
    returns (string memory, string[10] memory)
  {
    Doctor memory doctor = doctors[_doctorId];
    return (doctor.doctorId, doctor.data);
  }

  // View function to retrieve all admins
  // View function to retrieve all admins
  function viewAllAdmins() public view returns (Admin[] memory) {
    uint256 adminsCount = 0;
    for (uint256 i = 1; i <= pharmacyIdCounter; i++) {
      if (bytes(admins[pharmacyStocks[i].adminAddress].adminId).length > 0) {
        adminsCount++;
      }
    }
    Admin[] memory allAdmins = new Admin[](adminsCount);
    uint256 index = 0;
    for (uint256 i = 1; i <= pharmacyIdCounter; i++) {
      if (bytes(admins[pharmacyStocks[i].adminAddress].adminId).length > 0) {
        allAdmins[index] = admins[pharmacyStocks[i].adminAddress];
        index++;
      }
    }
    return allAdmins;
  }

  // View function to get pharmacy details by ID
  function getPharmacy(uint256 _id)
    public
    view
    returns (string memory, uint256)
  {
    Pharmacy memory pharmacy = pharmacyStocks[_id];
    return (pharmacy.drugName, pharmacy.quantity);
  }

 function getAllPharmacies() public view returns (string[] memory, uint256[] memory) {
    string[] memory medicineNames = new string[](pharmacyIdCounter);
    uint256[] memory quantities = new uint256[](pharmacyIdCounter);

    for (uint256 i = 1; i <= pharmacyIdCounter; i++) {
        Pharmacy memory pharmacy = pharmacyStocks[i];
        medicineNames[i - 1] = pharmacy.drugName;
        quantities[i - 1] = pharmacy.quantity;
    }

    return (medicineNames, quantities);
}



  // Sample input function
  function addSampleData() public {
    string memory patientId = "P001";
    string[14] memory patientData = [
      "John Doe", // name
      "123 Main St", // patientAddress
      "Springfield", // city
      "IL", // state
      "12345", // postalcode
      "USA", // country
      "1234567890", // phoneNumber
      "john@example.com", // email
      "2024-02-13", // regisDate
      "Fever", // disease
      "Headache", // symptoms
      "Paracetamol", // medicine
      "Follow up in 3 days", // additionalInfo
      "D001" // doctorId
    ];
    addPatient(patientId, patientData);

    string memory doctorId = "D001";
    string[10] memory doctorData = [
      "Dr. Smith", // doctorName
      "456 Oak St", // doctorAddress
      "Springfield", // doctorCity
      "IL", // doctorState
      "12345", // doctorPostalCode
      "USA", // doctorCountry
      "1234567890", // doctorPhoneNumber
      "smith@example.com", // doctorEmail
      "MD", // qualification
      "L12345" // licenseNumber
    ];
    addDoctor(doctorId, doctorData);
  }

  function addSamplePharmacyData(address _adminAddress) public {
    addPharmacyStock("Aspirin", 100, _adminAddress);
    addPharmacyStock("Paracetamol", 200, _adminAddress);
    addPharmacyStock("Amoxicillin", 150, _adminAddress);
  }
}
