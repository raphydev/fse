<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180419141710 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE intervenant (id INT AUTO_INCREMENT NOT NULL, image_size INT NOT NULL, image_name VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, office VARCHAR(255) NOT NULL, position INT NOT NULL, created DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE organizer (id INT AUTO_INCREMENT NOT NULL, image_size INT DEFAULT NULL, image_name VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, website VARCHAR(255) NOT NULL, content LONGTEXT DEFAULT NULL, created DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE partner (id INT AUTO_INCREMENT NOT NULL, image_size INT NOT NULL, image_name VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, website VARCHAR(255) NOT NULL, created DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE partner_type (id INT AUTO_INCREMENT NOT NULL, partner_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, position INT NOT NULL, INDEX IDX_DCEA64319393F8FE (partner_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_users (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(128) NOT NULL, password VARCHAR(64) NOT NULL, email VARCHAR(255) DEFAULT NULL, firstname VARCHAR(255) DEFAULT NULL, lastname VARCHAR(255) DEFAULT NULL, phone VARCHAR(35) DEFAULT NULL COMMENT \'(DC2Type:phone_number)\', roles LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', is_active TINYINT(1) DEFAULT NULL, created DATETIME DEFAULT NULL, UNIQUE INDEX UNIQ_C2502824F85E0677 (username), UNIQUE INDEX UNIQ_C2502824E7927C74 (email), UNIQUE INDEX UNIQ_C2502824444F97DD (phone), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE partner_type ADD CONSTRAINT FK_DCEA64319393F8FE FOREIGN KEY (partner_id) REFERENCES partner (id)');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE partner_type DROP FOREIGN KEY FK_DCEA64319393F8FE');
        $this->addSql('DROP TABLE intervenant');
        $this->addSql('DROP TABLE organizer');
        $this->addSql('DROP TABLE partner');
        $this->addSql('DROP TABLE partner_type');
        $this->addSql('DROP TABLE app_users');
    }
}
