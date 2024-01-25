// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

contract PatientRecords {
    uint public recordCount;
    mapping(uint => PatientRecord) patientRecords;

    struct PatientRecord {
        uint recordId;
        uint timestamp;
        string patientName;
        uint stepCount;
        uint bloodRate;
        uint height;
        uint weight;
    }

    event PatientRecords__AddPatientRecord(
        uint recordId,
        uint timestamp,
        string patientName,
        uint stepCount,
        uint bloodRate,
        uint height,
        uint weight
    );

    function addPatientRecord(
        string memory _patientName,
        uint _stepCount,
        uint _bloodRate,
        uint _height,
        uint _weight
    ) public {
        recordCount++;
        patientRecords[recordCount] = PatientRecord(
            recordCount,
            block.timestamp,
            _patientName,
            _stepCount,
            _bloodRate,
            _height,
            _weight
        );
        emit PatientRecords__AddPatientRecord(
            recordCount,
            block.timestamp,
            _patientName,
            _stepCount,
            _bloodRate,
            _height,
            _weight
        );
    }

    function getPatientRecord(
        uint _recordId
    ) public view returns (uint, uint, string memory, uint, uint, uint, uint) {
        PatientRecord storage record = patientRecords[_recordId];
        return (
            record.recordId,
            record.timestamp,
            record.patientName,
            record.stepCount,
            record.bloodRate,
            record.height,
            record.weight
        );
    }

    function getLatestRecordCount() public view returns (uint) {
        return recordCount;
    }
    
    function getAllPatientRecords() public view returns (PatientRecord[] memory) {
        PatientRecord[] memory records = new PatientRecord[](recordCount);

        for (uint i = 1; i <= recordCount; i++) {
            records[i - 1] = patientRecords[i];
        }

        return records;
    }
}