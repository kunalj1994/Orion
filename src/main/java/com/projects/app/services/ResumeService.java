package com.projects.app.services;

import com.projects.app.dao.ResumeDAO;
import com.projects.app.model.Description;
import com.projects.app.model.Experience;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by kjaiswa3 on 6/4/2017.
 */
@Service("resService")
public class ResumeService {

  @Autowired
  private ResumeDAO resumeDAO;

   public List<Experience> retriveExperiences(){
     return resumeDAO.listExperience();
   }

   public List<Description> retrieveDescriptions(){
     return resumeDAO.listDescription();
   }
}
