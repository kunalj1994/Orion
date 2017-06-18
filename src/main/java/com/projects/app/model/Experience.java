package com.projects.app.model;

import java.util.Arrays;

public class Experience extends Resume {

  private String companyName;
  private String title;
  private String duration;
  private String[] description;

  public String getCompanyName() {
    return companyName;
  }

  public void setCompanyName(String companyName) {
    this.companyName = companyName;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDuration() {
    return duration;
  }

  public void setDuration(String duration) {
    this.duration = duration;
  }

  public String[] getDescription() {
    return description;
  }

  public void setDescription(String[] description) {
    this.description = description;
  }

  @Override
  public boolean isNull(){
    return companyName == null && title == null && duration == null && description == null;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass() || this.isNull()) return false;
    Experience that = (Experience) o;

    if (!companyName.equals(that.companyName)) return false;
    if (!title.equals(that.title)) return false;
    if (!duration.equals(that.duration)) return false;
    // Probably incorrect - comparing Object[] arrays with Arrays.equals
    return Arrays.equals(description, that.description);

  }

  @Override
  public int hashCode() {
    int result = companyName.hashCode();
    result = 31 * result + title.hashCode();
    result = 31 * result + duration.hashCode();
    result = 31 * result + Arrays.hashCode(description);
    return result;
  }

  @Override
  public String toString() {
    return "Experience{" +
            "companyName='" + companyName + '\'' +
            ", title='" + title + '\'' +
            ", duration='" + duration + '\'' +
            ", description=" + Arrays.toString(description) +
            '}';
  }
}
