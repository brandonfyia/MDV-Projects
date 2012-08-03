//
//  AppDelegate.m
//  testApp
//
//  Created by Brandon Sease on 8/2/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import "AppDelegate.h"

@implementation AppDelegate

@synthesize window = _window;

- (void)dealloc
{
    [_window release];
    [super dealloc];
}

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{   
    //Create a variable using the float data type. Cast the float to an int and using NSLog, output both the initial float value as well as the int value.
    int ten = 10;
    int three = 3;
    
    float answer = (float)ten / (float)three;
    
    NSLog(@"answer=%f", answer);
    NSLog(@"ten=%d, three=%d", ten, three);

    //Perform an AND, OR comparison. Use float, int and BOOL types. BOOL values should be YES or NO and written in all caps.
    int chips = 42;
    float leftOverPizza = .5;
    BOOL dip = YES;
    BOOL money = NO;
    
    if ((chips > 20) && (dip = YES)) 
    {
        NSLog(@"You have enough chips and dip for a snack!");
    }
    else if ((leftOverPizza >= .5)|| (money == YES))
    {
        NSLog(@"You can have enough pizza for a snack!");
    }
    else
    {
        NSLog(@"No snack for you.");
    }
    
    //Use an if, else if and else check using any of the data types of your choice.
    NSLog(@"See above!");
    
    //Perform a single for loop printing out values to the console
    for (chips; chips>0; chips--) 
    {
        NSLog(@"%d chips left", chips );
    }
    
    //Perform a nested loop printing out values to the console
    for (int chips= 20; chips>0; chips--) 
    {
        NSLog(@"%d chips left", chips );
        for (int bites=0; bites<2; bites++)
        {
            NSLog(@"%d bites of this chip left", bites);
        }
        
    }
    
    //Perform a while loop that increments an int variable and outputs to the console.
    while (chips<11) {
        NSLog(@"Replacing eaten chips %d", chips);
        chips ++;
    }
    
    int hello = 0;
    
    
    self.window = [[[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]] autorelease];
    // Override point for customization after application launch.
    self.window.backgroundColor = [UIColor whiteColor];
    [self.window makeKeyAndVisible];
    return YES;
}

- (void)applicationWillResignActive:(UIApplication *)application
{
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
}

- (void)applicationDidEnterBackground:(UIApplication *)application
{
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later. 
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}

- (void)applicationWillEnterForeground:(UIApplication *)application
{
    // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
}

- (void)applicationDidBecomeActive:(UIApplication *)application
{
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}

- (void)applicationWillTerminate:(UIApplication *)application
{
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}

@end
