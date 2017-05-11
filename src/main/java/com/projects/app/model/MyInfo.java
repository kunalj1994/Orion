package com.projects.app.model;

/**
 * Created by kjaiswa3 on 4/15/2017.
 */
public class MyInfo {

  private final String firstName= "KUNAL";
  private final String lastName = "JAISWAL";

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  @Override
  public String toString() {
    return "MyInfo{" +
            "firstName='" + firstName + '\'' +
            ", lastName='" + lastName + '\'' +
            '}';
  }
}
