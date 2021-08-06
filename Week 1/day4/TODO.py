tasks_high = {}
tasks_med = {}
tasks_low = {}
all_tasks = []

while True:
    print("Press 1 to add task\n") 
    print("Press 2 to delete task\n")
    print("Press 3 to view all tasks\n") 
    print("Press q to quit\n")
    input1 = input()
    
    if input1 == "q":
        break

    elif input1 == "1":
        task = input("What is the title of the task?\n")
        priority = input("What is the priority: low, med, high?\n")
        if priority == "high":
            tasks_high[task] = priority

        elif priority == "low":
            tasks_low[task] = priority

        elif priority == "med":
            tasks_med[task] = priority
        
        all_tasks = [tasks_high, tasks_med, tasks_low]

    elif input1 == "2":
        count = 0
        for item in all_tasks:
            print(item, count)
            count += 1
        task_to_del = int(input("Which index would you like to delete?\n"))
        del all_tasks[task_to_del]
        print("Task has been removed\n")


    elif input1 == "3":
        count = 1
        for item in all_tasks:
            
            #print(" - " + item + " - ")
            #if statement not printing empty dicts
            if item == {}:
                pass
                #print(count)
        for key, value in tasks_high.items():
                if True:
                    print(count, ' - ', key, ' - ', value)
                    count += 1
        for key, value in tasks_med.items():
                if True:  
                    print(count, ' - ', key, ' - ', value)
                    count += 1
        for key, value in tasks_low.items():
                if True:    
                    print(count, ' - ', key, ' - ', value)
                    count += 1
                #print('\n'.join("{}: {}".format(k, v) for k, v in all_tasks.items()))
            
                

            