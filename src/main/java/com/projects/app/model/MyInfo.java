package com.projects.app.model;

/**
 * Created by kjaiswa3 on 4/15/2017.
 */
public class MyInfo {

  private final String firstName= "Kunal";
  private final String lastName = "Jaiswal";
  private final String email = "kunalj1994@gmail.com";
  private final String phone = "(716)445-7766";
  private final String address = "45 Hubbard St, Middletown, CT 06457";
  private final String skypeUserName = "kunal.jaiswal14";


  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public String getEmail() {
    return email;
  }

  public String getPhone() {
    return phone;
  }

  public String getAddress() {
    return address;
  }

  public String getSkypeUserName() {
    return skypeUserName;
  }

  @Override
  public String toString() {
    return "MyInfo{" +
            "firstName='" + firstName + '\'' +
            ", lastName='" + lastName + '\'' +
            ", email='" + email + '\'' +
            ", address='" + address + '\'' +
            ", phone='" + phone + '\'' +
            ", skypeUserName='" + skypeUserName + '\'' +
            '}';
  }
}
