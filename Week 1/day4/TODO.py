todoList = []
todoDict = {}
input1 = ""
while input1 != 'q':
    print("Press 1 to add task\n") 
    print("Press 2 to delete task\n")
    print("Press 3 to view all tasks\n") 
    print("Press q to quit\n")
    
    input1 = input()

    if input1 == "1":
        
        task = input("What is the title of the task?\n")
        priority = input("What is the priority: low, med, high?\n")
        full_task = task + " " + priority
        todoDict["title"] = task
        todoDict["priority"] = priority
        todoList.append(todoDict)

    elif input1 == "2":
        count = 1
        for item in todoList:
            print(item, count)
            count += 1

        task_to_del = int(input("Which index would you like to delete?\n"))
        taskToDeleteIndex = task_to_del - 1
        del todoList[taskToDeleteIndex]
        #three for loops like pulling info to baseoff input and remove individ
        
        print("Task has been removed\n")


    elif input1 == "3":
        count = 1
        for item in todoList:
            # print(str(count) + " - " + item + " - ")
            print(" %d, %s, %s " % (count, item["title"], item["priority"]))
            count += 1
            
            
            
            #if statement not printing empty dicts
            # if item == {}:
                # pass
                #print(count)


        # for key, value in tasks_high.items():
        #         if True:
        #             print(count, ' - ', key, ' - ', value)
        #             count += 1
        # for key, value in tasks_med.items():
        #         if True:  
        #             print(count, ' - ', key, ' - ', value)
        #             count += 1
        # for key, value in tasks_low.items():
        #         if True:    
        #             print(count, ' - ', key, ' - ', value)
        #             count += 1
                #print('\n'.join("{}: {}".format(k, v) for k, v in all_tasks.items()))