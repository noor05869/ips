import React, { Component } from "react";
import SelectType from "./SelectType";
import PersonalDetails from "./PersonalDetails";
import SourceIncome from "./SourceIncome";
import ForiegnAccount from "./ForiegnAccount";
import NextToKin from "./NextToKin";
import BankMandate from "./BankMandate";
import IBAN from 'iban'
import NavigationBar from "../../Atoms/NavgationBar";
import AccInstruct from "./AccInstruct";
import Guardian from "./Guardian";
import JointApplication from "./JointApplication";
import SampleState from '../../../Assets/filledState'
import FileUploading from "./FileUploading";
import UnderTaking from "./UnderTaking";
import ReviewApplication from "./ReviewApplication";
import TermsAndConditions from "./TermsAndConditions";

export default class IPSForm extends Component {

  state = {
    uid: localStorage.getItem('uid'),
    step: 1,
    AccountType: 'Individual',
    firstName: "",
    RelativeName: "",
    email: "",
    phoneNumber: "",
    BirthDay: "",
    BirthCountry: "",
    BirthCity: "",
    Nationality: "",
    Resident: "",
    IDType: "CNIC",
    CNIC: "",
    IssueDate: "",
    ExpiryDate: "",
    lifeTimeExpiry: false,
    Gender: "",
    Street: "",
    country: "",
    Provinces: "",
    City: "",
    MailingAddress: true,
    MailStreet: "",
    mailCountry: "",
    MailProvinces: "",
    MailCity: "",
    BussType: "",
    IncomeSource: "",
    CompName: "",
    AnnualIncome: "",
    OtherIncome: "",
    TaxFiler: "",
    NTN: "",
    PoliticalExpose: "",
    USCitizen: "NO",
    USGREENCARD: "NO",
    USTIN: "",
    USGREENCARDNum: "",
    OverseasAddress: "",
    frgnNumber: "",
    PWRAttorney: "",
    AttorneyAddress: "",
    renouncedCitizenchip: "",
    taxformSubmit: "",
    formSubmitDate: "",
    KinName: "",
    KinFthrName: "",
    KinIDType: "",
    KinCNIC: "",
    KinRelation: "",
    KinMailstreet: "",
    KinMailCountry: "",
    KinMailProvinces: "",
    KinMailCity: "",
    KinNumber: "",
    KinPhoneNumber: "",
    KinFax: "",
    KinEmail: "",
    BankTitle: "",
    BankNum: "",
    // BankBranch: "",
    BankAddress: "",
    AccountOperatingInstruction: "",
    AccountOperatingInstructionOtherDetails: "",
    // ZakatExemption: "",
    // ReasonZakat: "",
    // otherZakatReason: "",
    TaxExemption: "",
    // TransactionMode: "",
    Minnorrelation: "",
    MinnorRelationDetails: "",
    JointAccountTitle: "",
    JointRelativeName: "",
    Jointemail: "",
    JointPhoneNumber: "",
    JointNumber: "",
    JointFaxNumber: "",
    Jointstreet: "",
    Jointcountry: "",
    JointProvinces: "",
    JointCity: "",
    JointMailingAddress: false,
    JointMailstreet: "",
    JointmailCountry: "",
    JointMailProvinces: "",
    JointMailCity: "",
    JointBirthDay: "",
    JointBirthCountry: "",
    JointBirthCity: "",
    JointNationality: "",
    JointResident: "",
    JointCNIC: "",
    JointIDType: "",
    JointIssueDate: "",
    JointExpiryDate: "",
    JointlifeTimeExpiry: true,
    JointGender: "",
    JointProfession: "",
    JointIncomeSource: "",
    JointCompName: "",
    JointAnnualIncome: "",
    JointOtherIncome: "",
    JointTaxFiler: "",
    JointNTN: "",
    JointPoliticalExpose: "",
    JointUSCitizen: "",
    JointUSGREENCARD: "",
    JointUSTIN: "",
    JointUSGREENCARDNum: "",
    JointOverseasAddress: "",
    JointfrgnNumber: "",
    JointPWRAttorney: "",
    JointAttorneyAddress: "",
    JointRenouncedCitizenchip: "",
    JointTaxformSubmit: "",
    JointformSubmitDate: "",
    CNICFrontFile: "",
    CNICBackFile: "",
    kinCNICFrontFile: '',
    kinCNICBackFile: '',
    MailingAddProof: "",
    IncomeProof: "",
    AccMaintCertificate: "",
    Signatures: "",
    undertakingAccepted: false,
    giftAccepted: false,
    retirementAccepted: false,
    termsandConditions: false,
    accountOpeningtermsandConditions: false,
    aggrementtermsandConditions: false,
    residentiaProvinceList: [],
    residentialCitiesList: [],
    mailProvinceList: [],
    mailCitiesList: [],
    KinmailProvinceList: [],
    KinmailCitiesList: [],
    JointresidentiaProvinceList: [],
    JointresidentialCitiesList: [],
    JointmailProvinceList: [],
    JointmailCitiesList: [],
  };

  // go back to previous step

  // state = SampleState


  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  goToPersonal = () => {
    this.setState({ step: 2 });
  };
  goToIdentity = () => {
    this.setState({ step: 3 });
  };

  // handle field change
  handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    console.log({ name, value, type, checked, files })
    if (name === 'AccountType') {
      this.nextStep()
      if (value !== 'Joint') {
        this.setState({
          JointAccountTitle: "",
          JointRelativeName: "",
          Jointemail: "",
          JointPhoneNumber: "",
          JointNumber: "",
          JointFaxNumber: "",
          Jointstreet: "",
          Jointcountry: "",
          JointProvinces: "",
          JointCity: "",
          JointMailingAddress: "",
          JointMailstreet: "",
          JointmailCountry: "",
          JointMailProvinces: "",
          JointMailCity: "",
          JointBirthDay: "",
          JointBirthCountry: "",
          JointBirthCity: "",
          JointNationality: "",
          JointResident: "",
          JointCNIC: "",
          JointIDType: "",
          JointIssueDate: "",
          JointExpiryDate: "",
          JointlifeTimeExpiry: true,
          JointGender: "",
          JointProfession: "",
          JointIncomeSource: "",
          JointCompName: "",
          JointAnnualIncome: "",
          JointOtherIncome: "",
          JointTaxFiler: "",
          JointNTN: "",
          JointPoliticalExpose: "",
          JointUSCitizen: "",
          JointUSGREENCARD: "",
          JointUSTIN: "",
          JointUSGREENCARDNum: "",
          JointOverseasAddress: "",
          JointfrgnNumber: "",
          JointPWRAttorney: "",
          JointAttorneyAddress: "",
          JointRenouncedCitizenchip: "",
          JointTaxformSubmit: "",
          JointformSubmitDate: "",
        })
      }
      if (value !== 'Minor') {
        this.setState({
          Minnorrelation: "",
          MinnorRelationDetails: "",
        })
      }
      this.setState({ [name]: value })
    }
    else if (type === "checkbox") {
      this.setState({
        [name]: checked,
      });
    }
    else if (type === "file") {
      this.setState({ [name]: files[0] });
    }
    else if ((name === "CNIC" && this.state.IDType !== 'Passport') || name === "KinFax" || name === "KinNumber" || (name === "KinCNIC" && this.state.KinIDType !== 'Passport') || name === "USGREENCARDNum" || name === "USTIN" || (name === "JointCNIC" && this.state.JointIDType !== 'Passport')) {
      this.setState({ [name]: value.replace(/[^0-9]/gi, "") });
    }
    else {
      this.setState({ [name]: value });
    }

    if (name == 'lifeTimeExpiry') {
      this.setState({ ExpiryDate: '' });
    }
    if (name == 'JointlifeTimeExpiry') {
      this.setState({ JointExpiryDate: '' });
    }
  };

  handleDrctChange = (name, e) => {
    console.log({ name, e })
    this.setState({ [name]: e });
    if (name == 'IBAN') {
      this.setState({ IBANError: !IBAN.isValid(e['iban']) });
    }
  };

  render() {
    const { step } = this.state;
    const {
      uid,
      AccountType,
      firstName,
      RelativeName,
      email,
      phoneNumber,
      BirthDay,
      BirthCountry,
      BirthCity,
      Nationality,
      Resident,
      IDType,
      CNIC,
      IssueDate,
      ExpiryDate,
      lifeTimeExpiry,
      Gender,
      Street,
      country,
      Provinces,
      City,
      MailingAddress,
      MailStreet,
      mailCountry,
      MailProvinces,
      MailCity,
      BussType,
      IncomeSource,
      CompName,
      AnnualIncome,
      OtherIncome,
      TaxFiler,
      NTN,
      PoliticalExpose,
      USCitizen,
      USGREENCARD,
      USTIN,
      USGREENCARDNum,
      OverseasAddress,
      frgnNumber,
      PWRAttorney,
      AttorneyAddress,
      renouncedCitizenchip,
      taxformSubmit,
      formSubmitDate,
      KinName,
      KinFthrName,
      KinIDType,
      KinCNIC,
      KinRelation,
      KinMailstreet,
      KinMailCountry,
      KinMailProvinces,
      KinMailCity,
      KinNumber,
      KinPhoneNumber,
      KinFax,
      KinEmail,
      BankTitle,
      BankNum,
      // BankBranch,
      BankAddress,
      AccountOperatingInstruction,
      AccountOperatingInstructionOtherDetails,
      // ZakatExemption,
      // ReasonZakat,
      // otherZakatReason,
      TaxExemption,
      // TransactionMode,
      Minnorrelation,
      MinnorRelationDetails,
      JointAccountTitle,
      JointRelativeName,
      Jointemail,
      JointPhoneNumber,
      JointNumber,
      JointFaxNumber,
      Jointstreet,
      Jointcountry,
      JointProvinces,
      JointCity,
      JointMailingAddress,
      JointMailstreet,
      JointmailCountry,
      JointMailProvinces,
      JointMailCity,
      JointBirthDay,
      JointBirthCountry,
      JointBirthCity,
      JointNationality,
      JointResident,
      JointCNIC,
      JointIDType,
      JointIssueDate,
      JointExpiryDate,
      JointlifeTimeExpiry,
      JointGender,
      JointProfession,
      JointIncomeSource,
      JointCompName,
      JointAnnualIncome,
      JointOtherIncome,
      JointTaxFiler,
      JointNTN,
      JointPoliticalExpose,
      JointUSCitizen,
      JointUSGREENCARD,
      JointUSTIN,
      JointUSGREENCARDNum,
      JointOverseasAddress,
      JointfrgnNumber,
      JointPWRAttorney,
      JointAttorneyAddress,
      JointRenouncedCitizenchip,
      JointTaxformSubmit,
      JointformSubmitDate,
      CNICFrontFile,
      CNICBackFile,
      kinCNICFrontFile,
      kinCNICBackFile,
      MailingAddProof,
      IncomeProof,
      AccMaintCertificate,
      Signatures,
      undertakingAccepted,
      giftAccepted,
      retirementAccepted,
      termsandConditions,
      accountOpeningtermsandConditions,
      aggrementtermsandConditions,
      residentiaProvinceList,
      residentialCitiesList,
      mailProvinceList,
      mailCitiesList,
      KinmailProvinceList,
      KinmailCitiesList,
      JointresidentiaProvinceList,
      JointresidentialCitiesList,
      JointmailProvinceList,
      JointmailCitiesList,
    } = this.state;
    const values = {
      uid,
      AccountType,
      firstName,
      RelativeName,
      email,
      phoneNumber,
      BirthDay,
      BirthCountry,
      BirthCity,
      Nationality,
      Resident,
      IDType,
      CNIC,
      IssueDate,
      ExpiryDate,
      lifeTimeExpiry,
      Gender,
      Street,
      country,
      Provinces,
      City,
      MailingAddress,
      MailStreet,
      mailCountry,
      MailProvinces,
      MailCity,
      BussType,
      IncomeSource,
      CompName,
      AnnualIncome,
      OtherIncome,
      TaxFiler,
      NTN,
      PoliticalExpose,
      USCitizen,
      USGREENCARD,
      USTIN,
      USGREENCARDNum,
      OverseasAddress,
      frgnNumber,
      PWRAttorney,
      AttorneyAddress,
      renouncedCitizenchip,
      taxformSubmit,
      formSubmitDate,
      KinName,
      KinFthrName,
      KinIDType,
      KinCNIC,
      KinRelation,
      KinMailstreet,
      KinMailCountry,
      KinMailProvinces,
      KinMailCity,
      KinNumber,
      KinPhoneNumber,
      KinFax,
      KinEmail,
      BankTitle,
      BankNum,
      // BankBranch,
      BankAddress,
      AccountOperatingInstruction,
      AccountOperatingInstructionOtherDetails,
      // ZakatExemption,
      // ReasonZakat,
      // otherZakatReason,
      TaxExemption,
      // TransactionMode,
      Minnorrelation,
      MinnorRelationDetails,
      JointAccountTitle,
      JointRelativeName,
      Jointemail,
      JointPhoneNumber,
      JointNumber,
      JointFaxNumber,
      Jointstreet,
      Jointcountry,
      JointProvinces,
      JointCity,
      JointMailingAddress,
      JointMailstreet,
      JointmailCountry,
      JointMailProvinces,
      JointMailCity,
      JointBirthDay,
      JointBirthCountry,
      JointBirthCity,
      JointNationality,
      JointResident,
      JointCNIC,
      JointIDType,
      JointIssueDate,
      JointExpiryDate,
      JointlifeTimeExpiry,
      JointGender,
      JointProfession,
      JointIncomeSource,
      JointCompName,
      JointAnnualIncome,
      JointOtherIncome,
      JointTaxFiler,
      JointNTN,
      JointPoliticalExpose,
      JointUSCitizen,
      JointUSGREENCARD,
      JointUSTIN,
      JointUSGREENCARDNum,
      JointOverseasAddress,
      JointfrgnNumber,
      JointPWRAttorney,
      JointAttorneyAddress,
      JointRenouncedCitizenchip,
      JointTaxformSubmit,
      JointformSubmitDate,
      CNICFrontFile,
      CNICBackFile,
      kinCNICFrontFile,
      kinCNICBackFile,
      MailingAddProof,
      IncomeProof,
      AccMaintCertificate,
      Signatures,
      undertakingAccepted,
      giftAccepted,
      retirementAccepted,
      termsandConditions,
      accountOpeningtermsandConditions,
      aggrementtermsandConditions,
      residentiaProvinceList,
      residentialCitiesList,
      mailProvinceList,
      mailCitiesList,
      KinmailProvinceList,
      KinmailCitiesList,
      JointresidentiaProvinceList,
      JointresidentialCitiesList,
      JointmailProvinceList,
      JointmailCitiesList,
    };

    console.log("state", this.state);
    switch (step) {
      case 0:
        return (
          <>
            <NavigationBar step={this.state.step} />
            <SelectType
              handleDrctChange={this.handleDrctChange}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 1:
        return (
          <>
            <NavigationBar step={this.state.step} />
            <PersonalDetails
              handleDrctChange={this.handleDrctChange}
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 2:
        return (
          <>
            <NavigationBar step={this.state.step} />
            <SourceIncome
              handleDrctChange={this.handleDrctChange}
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      // case 3:
      //   return (
      //     <>
      //       <NavigationBar step={this.state.step} />
      //       <ForiegnAccount
      //         handleDrctChange={this.handleDrctChange}
      //         prevStep={this.prevStep}
      //         nextStep={this.nextStep}
      //         handleChange={this.handleChange}
      //         values={values}
      //       />
      //     </>
      //   );
      case 3:
        return (
          <>
            <NavigationBar step={this.state.step} />
            <NextToKin
              handleDrctChange={this.handleDrctChange}
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      // case 5:
      //   return (
      //     <>
      //       <NavigationBar step={this.state.step} />
      //       <BankMandate
      //         handleDrctChange={this.handleDrctChange}
      //         prevStep={this.prevStep}
      //         nextStep={this.nextStep}
      //         handleChange={this.handleChange}
      //         values={values}
      //       />
      //     </>
      //   );
      case this.state.AccountType === 'Joint' && 4:
        return (
          <>
            <NavigationBar step={this.state.step} Acc={this.state.AccountType} />

            <JointApplication
              handleDrctChange={this.handleDrctChange}
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case this.state.AccountType === 'Minor' && 4:
        return (
          <>
            <NavigationBar step={this.state.step} Acc={this.state.AccountType} />
            <Guardian
              handleDrctChange={this.handleDrctChange}
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      // case this.state.AccountType === 'Individual' && 4 || 5:
      //   return (
      //     <>
      //       <NavigationBar step={this.state.step} Acc={this.state.AccountType} />
      //       <AccInstruct
      //         handleDrctChange={this.handleDrctChange}
      //         prevStep={this.prevStep}
      //         nextStep={this.nextStep}
      //         handleChange={this.handleChange}
      //         values={values}
      //       />
      //     </>
      //   );
      case this.state.AccountType === 'Individual' && 4 || 5:
        return (
          <>
            <NavigationBar step={this.state.step} Acc={this.state.AccountType} />
            <FileUploading
              handleDrctChange={this.handleDrctChange}
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );


      case this.state.AccountType === 'Individual' && 5 || 6:
        return (
          <>
            <NavigationBar step={this.state.step} Acc={this.state.AccountType} />
            <UnderTaking
              handleDrctChange={this.handleDrctChange}
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );



      case this.state.AccountType === 'Individual' && 6 || 7:
        return (
          <>
            <NavigationBar step={this.state.step} Acc={this.state.AccountType} />
            <TermsAndConditions
              handleDrctChange={this.handleDrctChange}
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );

      case this.state.AccountType === 'Individual' && 7 || 8:
        return (
          <>
            <NavigationBar step={this.state.step} Acc={this.state.AccountType} />
            <ReviewApplication
              handleDrctChange={this.handleDrctChange}
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );



      // never forget the default case, otherwise VS code would be mad!
      default:
      // do nothing
    }
  }
}




