package com.projects.app.db;

import com.projects.app.model.Description;
import com.projects.app.model.Experience;
import com.projects.app.model.Resume;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import java.io.File;
import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Scanner;

/**
 * Created by kjaiswa3 on 6/4/2017.
 */

@Component
public class HashMapDatabase{

  private static HashMap<Integer, Resume> resumeDatabase = new HashMap<Integer, Resume>();

  @Value("classpath:constants/ProjectExperience.txt")
  private Resource experience;

  @Value("classpath:constants/ProjectDescription.txt")
  private Resource description;

  public HashMap<Integer, Resume> getExperienceDB() {
    populateDatabase(new Experience(), experience);
    return resumeDatabase;
  }

  public HashMap<Integer, Resume> getDescriptionDB() {
    populateDatabase(new Description(), description);
    return resumeDatabase;
  }

  public void populateDatabase(Resume exp, Resource res){
    try {
      File file = res.getFile();
      Scanner sc = new Scanner(file);
      String line;
      int key = resumeDatabase.size();
      while(sc.hasNext()){
        line = sc.nextLine();
        if(line.equals("#") || line.equals("END")){
          if(!exp.isNull() && !resumeDatabase.containsValue(exp)){
            resumeDatabase.put(key, exp);
            key++;
          }
          exp = exp.getClass().newInstance();
        }
        else{
          String[] keyValPair = line.split(":");
          Field field = exp.getClass().getDeclaredField(keyValPair[0]);
          field.setAccessible(true);
          if(keyValPair[1].startsWith("{")){
            String extractedString = keyValPair[1].substring(1, keyValPair[1].length()-1);
            String[] array = extractedString.split("/");
            field.set(exp,array);
          }
          else{
            field.set(exp, keyValPair[1]);

          }
        }
      }
    }catch(Exception e){
      e.printStackTrace();
    }
  }

}
