<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180724225710 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE company (id INT AUTO_INCREMENT NOT NULL, domain_id INT DEFAULT NULL, legal_id INT DEFAULT NULL, user_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, seat VARCHAR(255) DEFAULT NULL, city VARCHAR(255) DEFAULT NULL, website VARCHAR(255) DEFAULT NULL, is_reinforcement TINYINT(1) DEFAULT NULL, is_satisfied TINYINT(1) DEFAULT NULL, comment_reinforcement LONGTEXT DEFAULT NULL, slug VARCHAR(255) DEFAULT NULL, INDEX IDX_4FBF094F115F0EE5 (domain_id), INDEX IDX_4FBF094F62BB3C59 (legal_id), INDEX IDX_4FBF094FA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE department (id INT AUTO_INCREMENT NOT NULL, company_id INT DEFAULT NULL, name VARCHAR(255) DEFAULT NULL, mission LONGTEXT DEFAULT NULL, employer INT DEFAULT NULL, chief VARCHAR(255) DEFAULT NULL, content LONGTEXT DEFAULT NULL, INDEX IDX_CD1DE18A979B1AD6 (company_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE shareholder (id INT AUTO_INCREMENT NOT NULL, company_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, part VARCHAR(255) DEFAULT NULL, INDEX IDX_D5FE68CC979B1AD6 (company_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE company ADD CONSTRAINT FK_4FBF094F115F0EE5 FOREIGN KEY (domain_id) REFERENCES domain (id)');
        $this->addSql('ALTER TABLE company ADD CONSTRAINT FK_4FBF094F62BB3C59 FOREIGN KEY (legal_id) REFERENCES legal (id)');
        $this->addSql('ALTER TABLE company ADD CONSTRAINT FK_4FBF094FA76ED395 FOREIGN KEY (user_id) REFERENCES app_users (id)');
        $this->addSql('ALTER TABLE department ADD CONSTRAINT FK_CD1DE18A979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id)');
        $this->addSql('ALTER TABLE shareholder ADD CONSTRAINT FK_D5FE68CC979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE department DROP FOREIGN KEY FK_CD1DE18A979B1AD6');
        $this->addSql('ALTER TABLE shareholder DROP FOREIGN KEY FK_D5FE68CC979B1AD6');
        $this->addSql('DROP TABLE company');
        $this->addSql('DROP TABLE department');
        $this->addSql('DROP TABLE shareholder');
    }
}
