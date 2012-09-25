//
//  ViewController.h
//  AOC1wk4
//
//  Created by Brandon Sease on 8/23/12.
//  Copyright (c) 2012 Brandon Sease. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController
{
    UILabel *userLab;
    UITextField *userText;
    UIButton *userButt;
    UILabel *infoLab;
    NSString *infoText;
    NSString *fieldText;
    UIButton *dateButt;
    UIButton *infoButt;
    UILabel *nameLab;
}

- (NSString*)makeInfoText:(NSString*)firstS secondString:(NSString*)secondS;

@end
