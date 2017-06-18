package com.projects.app.dao;

import com.projects.app.db.HashMapDatabase;
import com.projects.app.model.Description;
import com.projects.app.model.Experience;
import com.projects.app.model.Resume;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * Created by kjaiswa3 on 6/4/2017.
 */

@Repository
public class ResumeDAOImpl implements ResumeDAO {

  @Autowired
  public HashMapDatabase db;

  public List<Experience> listExperience(){
    HashMap<Integer, Resume> resumeDatabase = db.getExperienceDB();
    List<Experience> list = new ArrayList<Experience>();
    for(Resume resume: resumeDatabase.values()){
      String className = resume.getClass().getName();
      className = className.substring(className.lastIndexOf('.') + 1);
      if(className.equals("Experience")){
        list.add((Experience) resume);
      }
    }
    return list;
  }

  public List<Description> listDescription(){
    HashMap<Integer, Resume> resumeDatabase = db.getDescriptionDB();
    List<Description> list = new ArrayList<Description>();
    for(Resume res: resumeDatabase.values()){
      String className = res.getClass().getName();
      className = className.substring(className.lastIndexOf('.') + 1);
      if(className.equals("Description")){
        list.add((Description) res);
      }
    }
    return list;
  }


}
