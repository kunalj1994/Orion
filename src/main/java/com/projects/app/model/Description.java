package com.projects.app.model;

import java.util.Arrays;

public class Description extends Resume {

  private String companyName;
  private String title;
  private String duration;
  private String summary;
  private String[] technologies;
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

  public String getSummary() {
    return summary;
  }

  public void setSummary(String summary) {
    this.summary = summary;
  }

  public void setDuration(String duration) {
    this.duration = duration;
  }

  public String[] getTechnologies() {
    return technologies;
  }

  public void setTechnologies(String[] technologies) {
    this.technologies = technologies;
  }

  public String[] getDescription() {
    return description;
  }

  public void setDescription(String[] description) {
    this.description = description;
  }

  @Override
  public boolean isNull(){
    return companyName == null && title == null && duration == null && summary == null && technologies == null && description == null;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass() || this.isNull()) return false;

    Description that = (Description) o;

    if (!companyName.equals(that.companyName)) return false;
    if (!title.equals(that.title)) return false;
    if (!duration.equals(that.duration)) return false;
    if (!summary.equals(that.summary)) return false;
    // Probably incorrect - comparing Object[] arrays with Arrays.equals
    if (!Arrays.equals(technologies, that.technologies)) return false;
    // Probably incorrect - comparing Object[] arrays with Arrays.equals
    return Arrays.equals(description, that.description);

  }

  @Override
  public int hashCode() {
    int result = companyName.hashCode();
    result = 31 * result + title.hashCode();
    result = 31 * result + duration.hashCode();
    result = 31 * result + summary.hashCode();
    result = 31 * result + Arrays.hashCode(technologies);
    result = 31 * result + Arrays.hashCode(description);
    return result;
  }

  @Override
  public String toString() {
    return "Experience{" +
            "companyName='" + companyName + '\'' +
            ", title='" + title + '\'' +
            ", duration='" + duration + '\'' +
            ", summary='" + summary + '\'' +
            ", technologies=" + Arrays.toString(technologies) +
            ", description=" + Arrays.toString(description) +
            '}';
  }
}
